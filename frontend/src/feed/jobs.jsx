import { create } from "zustand";

export const useJobFeed = create((set) => ({
	jobs: [],
	setJobs: (jobs) => set({ jobs }),
	createJobs: async (newJob) => {
		if (!newJob.title || !newJob.author || !newJob.location || !newJob.time || !newJob.description) {
			return { success: false, message: "Please fill in all fields." };
		}
		const res = await fetch("/jobs", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(newJob),
		});
		const data = await res.json();
		set((state) => ({ jobs: [...state.jobs, data.data] }));
		return { success: true, message: "Job created successfully" };
	},
	fetchJobs: async () => {
		const res = await fetch("/jobs");
		const data = await res.json();
		set({ jobs: data.data });
	},
	deleteProduct: async (pid) => {
		const res = await fetch(`/jobs/${pid}`, {
			method: "DELETE",
		});
		const data = await res.json();
		if (!data.success) return { success: false, message: data.message };

		// update the ui immediately, without needing a refresh
		set((state) => ({ jobs: state.jobs.filter((job) => job._id !== pid) }));
		return { success: true, message: data.message };
	},
	updateProduct: async (pid, updatedJob) => {
		const res = await fetch(`/api/products/${pid}`, {
			method: "PUT",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(updatedJob),
		});
		const data = await res.json();
		if (!data.success) return { success: false, message: data.message };

		// update the ui immediately, without needing a refresh
		set((state) => ({
			jobs: state.jobs.map((job) => (job._id === pid ? data.data : job)),
		}));

		return { success: true, message: data.message };
	},
}));
