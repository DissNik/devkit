document.addEventListener("moonshine:init",()=>{MoonShine.onCallback("spaMenu",function(e,t,i){const s=i.$el,a=s.closest(".menu"),n=s.closest("li");a.querySelectorAll("li").forEach(c=>{c.classList.remove("_is-active"),c.querySelector("a").removeAttribute("data-stop-async")}),n.classList.add("_is-active"),s.setAttribute("data-stop-async",!0);const h=new URL(s.href);h.searchParams.delete("_fragment-load"),history.pushState({},"",h.href)}),MoonShine.onCallback("asyncTabs",function(e,t,i){const s=i.$el;s.closest(".async-tabs-container").querySelectorAll("a").forEach(n=>{n.classList.remove("_is-active"),n.removeAttribute("data-stop-async")}),s.classList.add("_is-active"),s.setAttribute("data-stop-async",!0)})});document.addEventListener("alpine:init",()=>{Alpine.data("asyncTabs",()=>({init(){const e=this;this.$nextTick(()=>{e.$root.querySelector(".async-tabs-container a").click()})}})),Alpine.data("stepper",()=>({head:null,steps:[],heads:[],active:1,activeHead:1,container:1,activeStep:1,finishBlock:1,finished:!1,lock:!1,lockWhenFinish:!1,loaded:[],stepsFinished:[],stepsChanged:[],init(){this.lock=this.$root.dataset.lock,this.lockWhenFinish=this.$root.dataset.lockWhenFinish,this.active=parseInt(this.$root.dataset.current??this.active),this.head=this.$root.querySelector(".js-stepper-head-container"),this.container=this.$root.querySelector(".js-stepper-content-container"),this.finishBlock=this.$root.querySelector(".js-stepper-finish-content"),this.heads=this.head.querySelectorAll(".js-stepper-head"),this.steps=this.container.querySelectorAll(".js-stepper-content"),this.active>this.steps.length?this.finish():this._change()},current(e,t=!1){var i,s;e=parseInt(e),e!==this.active&&(!t&&this.lock||!t&&this.lockWhenFinish&&this.finished||(t||this._onStepChanging(),!t&&((s=(i=this._getActiveHead())==null?void 0:i.dataset)!=null&&s.nextLock)?this._change(!0):(this._onStepFinished(),this.active=e,this._change())))},forceChange(e){this.current(e,!0)},next(){var e,t;this._onStepChanging(),(t=(e=this._getActiveHead())==null?void 0:e.dataset)!=null&&t.nextLock?this._change(!0):(this._onStepFinished(),this.active++,this._change())},prev(){this._onStepChanging(),this.active--,this._change()},finish(){var e,t;this._onStepChanging(),(t=(e=this._getActiveHead())==null?void 0:e.dataset)!=null&&t.nextLock?this._change(!0):(this._onStepFinished(),this.finished=!0,this.active++,this._change(),this.finishBlock.style.display="block")},_onStepFinished(){this.activeHead&&(this.stepsFinished[this.active]!==void 0&&this.activeHead.dataset.asyncFinishEventsOnce||(this.activeHead.dataset.asyncFinishEvents&&MoonShine.dispatchEvents(this.activeHead.dataset.asyncFinishEvents,"",this),this.stepsFinished[this.active]=this.active))},_onStepChanging(){this.activeHead&&(this.stepsChanged[this.active]!==void 0&&this.activeHead.dataset.asyncChangingEventsOnce||(this.activeHead.dataset.asyncChangingEvents&&MoonShine.dispatchEvents(this.activeHead.dataset.asyncChangingEvents,"",this),this.stepsChanged[this.active]=this.active))},_getActiveHead(){return this.head.querySelector(`.js-stepper-head-${this.active}`)},_change(e=!1){if(e||(this.finishBlock.style.display="none",this.activeHead=this._getActiveHead(),this.activeStep=this.container.querySelector(`.js-stepper-content-${this.active}`)),this.activeHead){const t=`.js-stepper-content-${this.active} .js-stepper-content-html`;if(!e&&this.activeHead.dataset.asyncUrl&&this.loaded[this.active]===void 0){let i=function(s,a){a.loading=!1,a.loaded[a.active]=!0};MoonShine.request(this,this.activeHead.dataset.asyncUrl,"get",{},{},{events:this.activeHead.dataset.asyncEvents,selector:t,beforeHandleResponse:i,errorCallback:i})}}e||(this.steps.forEach(t=>t.style.display="none"),this.heads.forEach((t,i)=>{t.classList.remove("active");let s=t.querySelector(".js-stepper-head-state-default");t.querySelector(".js-stepper-head-state-active").style.display="none",s.style.display="block",s.classList.remove("js-stepper-head-state-done"),i<this.active&&s.classList.add("js-stepper-head-state-done")}),this.activeHead&&this.activeStep&&(this.activeStep.style.display="block",this.activeHead.classList.add("active"),this.activeHead.querySelector(".js-stepper-head-state-active").style.display="block",this.activeHead.querySelector(".js-stepper-head-state-default").style.display="none"))}}))});
