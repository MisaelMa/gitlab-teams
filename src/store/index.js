import Vue from "vue";
import Vuex from "vuex";

import * as actions from "./actions";
import * as getters from "./getters";
import state from "./state";
import plugins from "./plugins";
import mutations from "./mutations";
import ui from "./modules/ui";
import todo from "./modules/todo";
import merge_request from "./modules/merge_request";
import team from "./modules/team";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    ui,
    todo,
    merge_request,
    team
  },
  state,
  actions,
  getters,
  mutations,
  plugins,
  strict: process.env.NODE_ENV !== "production"
});