

const style = {
  "background-color": "lime"
};


export default {
  name: "VueModal",
  render (h) {
    const sub = Vue.component("")
    if (this.modal.open) {
      return h("div", {style}, [sub]);
    } 
  }
};
