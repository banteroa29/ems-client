import { createStore } from "vuex";

export default createStore({
  state() {
    return {
      personal_information: {},
      work_information : {},
      education : [],
      work_experience: [],
      emergency_contact : {}
    }
  },
  mutations: {
    addPersonalInfo(state,item) {
      state.personal_information = item
    },
    addWorkInformation(state,item) {
      state.work_information = item
    },
    addEducation(state,item) {
      state.education = item
    },
    addWorkExperience(state,item){
      state.work_experience = item
    },
    addEmergencyContact(state,item) {
      state.emergency_contact = item
    }
  }, 
  getters: {
    getPersonalInfo(state) {
      return state.personal_information
    },
    getWorkInfo(state) {
      return state.work_information
    },
    getEducation(state) {
      return state.education
    },
    getWorkExperience(state) {
      return state.work_experience
    },
    getEmergencyContact(state) {
      return state.emergency_contact
    }
  },
  actions: {},
  modules: {},
});
