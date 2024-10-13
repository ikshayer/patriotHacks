// stores/profileStore.js  
import { create } from 'zustand';  
import axios from 'axios';  
  
const useProfileStore = create((set) => ({  
  profile: {},  
  fetchProfile: async () => {  
   try {  
    const response = await axios.get('/profile');  
    set({ profile: response.data });  
   } catch (error) {  
    console.error(error);  
   }  
  },  
  updateProfile: async (profile) => {  
   try {  
    const response = await axios.put('/profile', profile);  
    set({ profile: response.data });  
   } catch (error) {  
    console.error(error);  
   }  
  },  
}));  
  
export default useProfileStore;
