import { ajax } from "discourse/lib/ajax";
import {getOwner} from 'discourse-common/lib/get-owner';
import discourseComputed from "discourse-common/utils/decorators";
export default Ember.Controller.extend({
  @discourseComputed('botstats')
  syncDisabled(b){
    if(b === "online"){return false}
    return true;
  },
  actions: {
    syncDiscord() {
        ajax('/discord-rolesync/sync', { type: "GET" }).then(function(a){
          alert("Discord member sync started!")
        })
    },
    startDiscord() {
        ajax('/discord-rolesync/start', { type: "GET" }).then(function(a){
          alert("Discord bot is starting!")
        })
    },
    stopDiscord() {
        ajax('/discord-rolesync/stop', { type: "GET" }).then(function(a){
          alert("Discord bot is stopping!")
        })
    }
  }
});
