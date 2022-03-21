(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{f820:function(e,t,o){"use strict";o.r(t);var c=o("7a23"),a={class:"about"};function r(e,t,o,r,l,n){var s=Object(c["z"])("SettingsCreator");return Object(c["r"])(),Object(c["e"])("div",a,[Object(c["i"])(s)])}var l={class:"settingsCreator"},n={class:"m-5",style:{border:"3px solid black","border-radius":"5px"}},s={class:"mainSettings"},i={class:"g-3 align-items-center"},u=Object(c["f"])("div",{class:"col-auto"},[Object(c["f"])("label",{for:"optionName",class:"col-form-label"},"Name der Option")],-1),b={class:"p-1 col-auto d-flex justify-content-center"},d={class:"g-3 align-items-center"},f=Object(c["f"])("div",{class:"col-auto"},[Object(c["f"])("label",{for:"azubiName",class:"col-form-label"},"Name des/der Auszubildenden")],-1),p={class:"p-1 col-auto d-flex justify-content-center"},O={class:"g-3 align-items-center"},j=Object(c["f"])("div",{class:"col-auto"},[Object(c["f"])("label",{for:"azubiYear",class:"col-form-label"},"Ausbildungsjahr")],-1),m={class:"p-1 col-auto d-flex justify-content-center"},h={class:"g-3 align-items-center"},v=Object(c["f"])("div",{class:"col-auto"},[Object(c["f"])("label",{for:"azubiDepartment",class:"col-form-label"},"Ggf. ausbildende Abteilung")],-1),y={class:"p-1 col-auto d-flex justify-content-center"},k={class:"g-3 align-items-center"},g=Object(c["f"])("div",{class:"col-auto"},[Object(c["f"])("label",{for:"azubiWeekFrom",class:"col-form-label"},"Ausbildungswoche vom")],-1),w={class:"p-1 col-auto d-flex justify-content-center"},N=Object(c["f"])("div",{class:"col-auto"},[Object(c["f"])("label",{for:"azubiWeekTo",class:"col-form-label"},"bis")],-1),z={class:"p-1 col-auto d-flex justify-content-center"},x={class:"daySettings m-5"},S={style:{border:"solid 1px black","background-color":"#42b983"}},B={class:"row g-0",style:{border:"1px solid black"}},C={class:"col-3"},F=Object(c["f"])("label",{for:"school"},"Schule",-1),I=["name","onChange","checked"],U={class:"col-3"},V=Object(c["f"])("label",{for:"work"},"Betrieb",-1),A=["name","onChange","checked"],T={class:"col-3"},D=Object(c["f"])("label",{for:"free"},"Frei/Urlaub",-1),R=["name","onChange","checked"],W={class:"col-3"},M=Object(c["f"])("label",{for:"none"},"keine Angaben",-1),P=["name","onChange","checked"],Y={class:"row g-0 align-items-center"},H={class:"col-auto"},J={for:"workHours",class:"col-form-label"},G={class:"col-auto"},q=["onUpdate:modelValue"],E={key:0,class:"alert alert-success",role:"alert"},K={class:"schoolWorkReports m-5",style:{border:"3px black solid","border-radius":"5px"}},L={class:"m-5"},Q=Object(c["f"])("div",null,"Texte für den Bericht hinzufügen",-1),X=Object(c["f"])("div",null,"Bericht für die Schule/den Betrieb:",-1),Z={class:"m-1"},$=Object(c["f"])("label",{for:"workReport"},"Betrieb",-1),_=["checked"],ee=Object(c["f"])("label",{for:"schoolReport"},"Schule",-1),te=["checked"],oe={class:"form-group m-1"},ce=Object(c["f"])("label",{for:"reportText"},"Schreibe deinen Bericht",-1),ae={key:0,class:"alert alert-danger",role:"alert"},re={key:1,class:"alert alert-success",role:"alert"};function le(e,t,o,a,r,le){return Object(c["r"])(),Object(c["e"])(c["a"],null,[Object(c["f"])("div",l,[Object(c["f"])("div",n,[Object(c["f"])("div",s,[Object(c["f"])("div",i,[u,Object(c["f"])("div",b,[Object(c["I"])(Object(c["f"])("input",{type:"text",id:"optionName",class:"form-control",style:{width:"50%"},placeholder:"z.B. erstes Halbjahr","onUpdate:modelValue":t[0]||(t[0]=function(t){return e.Option.optionName=t})},null,512),[[c["F"],e.Option.optionName]])])]),Object(c["f"])("div",d,[f,Object(c["f"])("div",p,[Object(c["I"])(Object(c["f"])("input",{type:"text",id:"azubiName",class:"form-control",style:{width:"50%"},placeholder:"z.B. Otto Ottomann","onUpdate:modelValue":t[1]||(t[1]=function(t){return e.Option.azubiName=t})},null,512),[[c["F"],e.Option.azubiName]])])]),Object(c["f"])("div",O,[j,Object(c["f"])("div",m,[Object(c["I"])(Object(c["f"])("input",{type:"text",id:"azubiDepartment",class:"form-control",style:{width:"50%"},placeholder:"z.B. 1. Ausbildungsjahr","onUpdate:modelValue":t[2]||(t[2]=function(t){return e.Option.azubiYear=t})},null,512),[[c["F"],e.Option.azubiYear]])])]),Object(c["f"])("div",h,[v,Object(c["f"])("div",y,[Object(c["I"])(Object(c["f"])("input",{type:"text",id:"azubiName",class:"form-control",style:{width:"50%"},placeholder:"z.B. Personalabteilung","onUpdate:modelValue":t[3]||(t[3]=function(t){return e.Option.department=t})},null,512),[[c["F"],e.Option.department]])])]),Object(c["f"])("div",k,[g,Object(c["f"])("div",w,[Object(c["I"])(Object(c["f"])("input",{type:"text",id:"azubiWeekFrom",class:"form-control",style:{width:"50%"},placeholder:"z.B. 1.Mai.2020","onUpdate:modelValue":t[4]||(t[4]=function(t){return e.Option.weekFrom=t})},null,512),[[c["F"],e.Option.weekFrom]])]),N,Object(c["f"])("div",z,[Object(c["I"])(Object(c["f"])("input",{type:"text",id:"azubiWeekTo",class:"form-control",style:{width:"50%"},placeholder:"z.B. 1.Mai.2020","onUpdate:modelValue":t[5]||(t[5]=function(t){return e.Option.weekTo=t})},null,512),[[c["F"],e.Option.weekTo]])])])]),Object(c["f"])("div",x,[(Object(c["r"])(!0),Object(c["e"])(c["a"],null,Object(c["y"])(e.Option.week,(function(e){return Object(c["r"])(),Object(c["e"])("div",{class:"",key:e.dayName},[Object(c["f"])("div",S,Object(c["B"])(e.dayName),1),Object(c["f"])("div",B,[Object(c["f"])("div",C,[F,Object(c["f"])("input",{type:"radio",id:"school",name:e.dayName,onChange:function(t){return e.value="school"},checked:"school"==e.value},null,40,I)]),Object(c["f"])("div",U,[V,Object(c["f"])("input",{type:"radio",id:"work",name:e.dayName,onChange:function(t){return e.value="work"},checked:"work"==e.value},null,40,A)]),Object(c["f"])("div",T,[D,Object(c["f"])("input",{type:"radio",id:"free",name:e.dayName,onChange:function(t){return e.value="free"},checked:"free"==e.value},null,40,R)]),Object(c["f"])("div",W,[M,Object(c["f"])("input",{type:"radio",id:"none",name:e.dayName,onChange:function(t){return e.value=""},checked:""==e.value},null,40,P)])]),Object(c["f"])("div",Y,[Object(c["f"])("div",H,[Object(c["f"])("label",J,"Anzahl der Stunden am "+Object(c["B"])(e.dayName),1)]),Object(c["f"])("div",G,[Object(c["I"])(Object(c["f"])("input",{type:"text",id:"workHours",class:"form-control","onUpdate:modelValue":function(t){return e.hours=t}},null,8,q),[[c["F"],e.hours]])])])])})),128)),1==e.alertOption?(Object(c["r"])(),Object(c["e"])("div",E," Deine Option wurde gespeichert! ")):Object(c["d"])("",!0),Object(c["f"])("button",{type:"submit",class:"btn btn-success",onClick:t[6]||(t[6]=function(t){return e.saveOption()})}," speichern ")])])]),Object(c["f"])("div",K,[Object(c["f"])("form",L,[Q,X,Object(c["f"])("div",Z,[$,Object(c["I"])(Object(c["f"])("input",{type:"radio",id:"workReport",name:"reports",value:"work","onUpdate:modelValue":t[7]||(t[7]=function(t){return e.report.type=t}),onChange:t[8]||(t[8]=function(t){return e.report.type="work"}),checked:"work"==e.report.type},null,40,_),[[c["D"],e.report.type]]),ee,Object(c["I"])(Object(c["f"])("input",{type:"radio",id:"schoolReport",name:"reports",value:"school","onUpdate:modelValue":t[9]||(t[9]=function(t){return e.report.type=t}),onChange:t[10]||(t[10]=function(t){return e.report.type="school"}),checked:"school"==e.report.type},null,40,te),[[c["D"],e.report.type]])]),Object(c["f"])("div",oe,[ce,1==e.alert?(Object(c["r"])(),Object(c["e"])("div",ae," Du hast keinen Typen ausgewählt. Wähle einen Typen Betrieb oder Schule aus! ")):Object(c["d"])("",!0),1==e.alertSuccess?(Object(c["r"])(),Object(c["e"])("div",re," Dein Bericht wurde gespeichert! ")):Object(c["d"])("",!0),Object(c["I"])(Object(c["f"])("textarea",{class:"form-control",id:"reportText",rows:"3","onUpdate:modelValue":t[11]||(t[11]=function(t){return e.report.value=t})},null,512),[[c["F"],e.report.value]])]),Object(c["f"])("button",{class:"btn btn-success",type:"submit",onClick:t[12]||(t[12]=function(t){return e.saveReport()})}," Speichern ")])])],64)}var ne=o("5530"),se=o("24bd"),ie={optionName:"",azubiName:"",azubiYear:"",department:"",weekFrom:"",weekTo:"",week:[{dayName:"Montag",value:"",hours:""},{dayName:"Dienstag",value:"",hours:""},{dayName:"Mittwoch",value:"",hours:""},{dayName:"Donnerstag",value:"",hours:""},{dayName:"Freitag",value:"",hours:""},{dayName:"Samstag",value:"",hours:""},{dayName:"Sonntag",value:"",hours:""}]},ue=Object(c["j"])({data:function(){return{report:{type:"",value:""},Option:Object(ne["a"])({},ie),alert:!1,alertOption:!1,alertSuccess:!1}},methods:{saveReport:function(){if("school"==this.report.type){try{se["b"](this.report)}catch(e){console.error(e,"API.addSchoolReport()")}this.alertSuccess=!0}else{if("work"!=this.report.type)return void(this.alert=!0);try{se["c"](this.report)}catch(e){console.error(e,"API.addWorkReport()")}this.alertSuccess=!0}this.report.value=""},saveOption:function(){try{se["a"](this.Option)}catch(e){console.error(e,"API.addOption()")}this.Option=Object(ne["a"])({},ie),this.alertOption=!0}},setup:function(){return{}}}),be=o("6b0d"),de=o.n(be);const fe=de()(ue,[["render",le]]);var pe=fe,Oe=Object(c["j"])({components:{SettingsCreator:pe}});const je=de()(Oe,[["render",r]]);t["default"]=je}}]);
//# sourceMappingURL=about.2ca95ec1.js.map