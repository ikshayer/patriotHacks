import { create } from "zustand";


const useProfile = create((set) => ({
	profiles: [],
	setProfiles: (profiles) => set({ profiles }),
	createProfiles: async (newProfile) => {
		if (!newProfile.username || !newProfile.password) {
			return { success: false, message: "Please fill in all fields." };
		}
		const res = await fetch("/profiles", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(newProfile),
		});
		const data = await res.json();
		set((state) => ({ profiles: [...state.profiles, data.data] }));
		return { success: true, message: "Profile created successfully" };
	},
	fetchProfiles: async () => {
		const res = await fetch("/profiles");
		const data = await res.json();
		set({ profiles: data.data });
        return {success: true, data: data}
	},
    fetchIndividualProfiles: async(uid) =>{
        const res = await fetch(`profiles/${uid}`)
        const data = await res.json();
        return {success: true, data: data}
    },
	deleteProfiles: async (pid) => {
		const res = await fetch(`/profiles/${pid}`, {
			method: "DELETE",
		});
		const data = await res.json();
		if (!data.success) return { success: false, message: data.message };

		// update the ui immediately, without needing a refresh
		set((state) => ({ profiles: state.profiles.filter((profile) => profile._id !== pid) }));
        
		return { success: true, message: data.message };
        
	},
	updateProfile: async (pid, updatedProfile) => {
		const res = await fetch(`/profiles/${pid}`, {
			method: "PUT",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(updatedProfile),
		});
		const data = await res.json();
		if (!data.success) return { success: false, message: data.message };

		// update the ui immediately, without needing a refresh
		set((state) => ({
			profiles: state.profiles.map((profile) => (profile._id === pid ? data.data : profile)),
		}));

		return { success: true, message: data.message };
	},
}));

export default useProfile
