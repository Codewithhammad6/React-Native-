import axiosInstance from "../utils/axiosInstance";
import { create } from 'zustand';
import { Alert } from "react-native";

interface User {
  _id: string;
  email: string;
  name: string;
}

interface RegisterFormData {
  name: string;
  email: string;
  password: string;
}

interface LoginFormData {
  email: string;
  password: string;
}

interface UserState {
  user: User | null;
  loading: boolean;
  isAuth: boolean;
  loaded: boolean;
  token: string | null;
  setToken: (token: string) => void;
  getUser: () => Promise<void>;
  register: (formData: RegisterFormData) => Promise<void>;
  login: (formData: LoginFormData) => Promise<{ success: boolean; user?: User }>;
  logout: () => Promise<void>;
}

const useStore = create<UserState>((set) => ({
  user: null,
  loading: false,
  isAuth: false,
  loaded: false,
  token: null,

  setToken: (token: string) => set({ token }),

  getUser: async () => {
    try {
      set({ loading: true });
      const { data } = await axiosInstance.get('/user/me');
      set({ 
        user: data.user, 
        isAuth: true,
        loaded: true 
      });
    } catch (err: any) {
      set({ 
        user: null, 
        isAuth: false,
        loaded: true 
      });
    } finally {
      set({ loading: false });
    }
  },

  register: async (formData: RegisterFormData) => {
    try {
      set({ loading: true });
      const { data } = await axiosInstance.post("/user/register", formData);
      
      set({ 
        user: data.user, 
        isAuth: true,
        token: data.token 
      });
      Alert.alert('Registration Successful')

    } catch (error: any) {
      Alert.alert(`${error.response.data.message}`)
      // console.log(error.response.data.message)
      throw error;
    } finally {
      set({ loading: false });
    }
  },

  login: async (formData: LoginFormData) => {
    try {
      set({ loading: true });
      const { data } = await axiosInstance.post("/user/login", formData);
      
      set({ 
        user: data.user, 
        isAuth: true,
        token: data.token 
      });
      Alert.alert('Login Successful')

      return { success: true, user: data.user };
    } catch (err: any) {
      set({ user: null, isAuth: false });

      Alert.alert(`${err?.response?.data?.message}`)
      
      return { success: false };
    } finally {
      set({ loading: false });
    }
  },

  logout: async () => {
    try {
      set({ loading: true });
      await axiosInstance.post("/user/logout");
      set({ 
        user: null, 
        isAuth: false,
        // token: null 
      });
      
      Alert.alert('Logged out successfully')

    } catch (err: any) {
      Alert.alert(`${err?.response?.data?.message}`)
    } finally {
      set({ loading: false });
    }
  },
}));

export default useStore;