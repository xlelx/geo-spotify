(this["webpackJsonpgeo-spotify"]=this["webpackJsonpgeo-spotify"]||[]).push([[0],{100:function(a,e,t){},101:function(a,e,t){},196:function(a,e,t){"use strict";t.r(e);var n=t(0),r=t.n(n),o=t(21),i=t.n(o),c=(t(100),t(17)),l=(t(101),t(49)),s=t.n(l),u=t(81),d=t(82),p=t(37),m=t.n(p),g=t(24),h=t(48),y=t.n(h),b=t(85),f=t.n(b),v=t(4),E=t(220),w=t(221),S={palette:{primary:{main:"#1db954",light:"#1ed760"},secondary:{main:"#212121",light:"#535353",lightest:"#b3b3b3"},type:"dark"}},k="Algeria,Egypt,Morocco,South Africa,Tunisia,Australia,New Zealand,Argentina,Bolivia,Brazil,Chile,Colombia,Ecuador,Paraguay,Peru,Uruguay,Canada,Costa Rica,Dominican Republic,El Salvador,Guatemala,Honduras,Mexico,Nicaragua,Panama,United States,Andorra,Austria,Belgium,Bulgaria,Cyprus,Czech Republic,Denmark,Estonia,Finland,France,Germany,Greece,Hungary,Iceland,Ireland,Italy,Latvia,Liechtenstein,Lithuania,Luxembourg,Malta,Monaco,Netherlands,Norway,Poland,Portugal,Romania,Slovakia,Spain,Sweden,Switzerland,Turkey,United Kingdom,Russia,Belarus,Kazakhstan,Moldova,Ukraine,Albania,Bosnia,Croatia,Montenegro,North Macedonia,Serbia,Slovenia,Kosovo,Bahrain,Hong Kong,India,Indonesia,Israel,Japan,Jordan,Kuwait,Lebanon,Malaysia,Oman,Palestine,Philippines,Qatar,Saudi Arabia,Singapore,Taiwan,Thailand,United Arab Emirates,Vietnam".split(","),A=Object(E.a)((function(a){return{}}));var T=function(){A();var a=Object(g.b)(),e=Object(g.c)((function(a){return a.root})),t=e.token,o=e.dataLoaded,i=e.countryData,c=e.playlists,l=e.playlist;if(!t)return r.a.createElement(v.a,{to:"/"});var p=[{eventName:"select",callback:function(e){var t=e.chartWrapper.getChart().getSelection()[0];if(t){var n=t.row+1;console.log(c[n]),a({type:"SET_PLAYLIST",payload:c[n]})}}}];if(!o){var h=[["Country",{type:"string",role:"tooltip",p:{html:!0}}]],b=[];k.forEach(function(){var a=Object(u.a)(s.a.mark((function a(e){var n,r,o,i;return s.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return n=y.a.getCode(e),a.prev=1,a.next=4,m.a.get("https://api.spotify.com/v1/browse/featured-playlists",{params:{country:n,limit:1},headers:{Authorization:"Bearer ".concat(t)}});case 4:r=a.sent,o=r.data.playlists.items[0],b.push(o.uri),i='<img src="'.concat(o.images[0].url,'" style="width:200px"/>'),h.push([e,i]),a.next=14;break;case 11:a.prev=11,a.t0=a.catch(1),console.log("country not found");case 14:case"end":return a.stop()}}),a,null,[[1,11]])})));return function(e){return a.apply(this,arguments)}}()),a({type:"SET_COUNTRYDATA_PLAYLISTS",payload:{countryData:h,playlists:b}})}return r.a.createElement(n.Fragment,null,r.a.createElement("div",{className:"App",style:{padding:"10px"}},r.a.createElement(w.a,{container:!0,spacing:0},r.a.createElement(w.a,{item:!0,xs:12},o?r.a.createElement(d.a,{chartType:"GeoChart",data:i,mapsApiKey:"AIzaSyCeSGOa_yX4pG3sRnQPrEGa4BY3mx5T4T0",rootProps:{"data-testid":"1"},options:{backgroundColor:{fill:S.palette.secondary.main,stroke:S.palette.primary.main,strokeWidth:3},geochartVersion:11,regioncoderVersion:1,datalessRegionColor:S.palette.secondary.lightest,defaultColor:S.palette.primary.main,enableRegionInteractivity:!0,tooltip:{isHtml:!0,trigger:"focus"},height:"".concat(.9*window.innerHeight,"px")},chartEvents:p}):null),r.a.createElement(w.a,{item:!0,xs:12},r.a.createElement(f.a,{token:t,uris:[l],play:!!l,name:"geo-spotify",showSaveIcon:!0})))))},O=t(89),C="6eb09ded486b45a6b0f011d4f4eb647f",I=t(34),L=t.n(I),j=("Algeria,Egypt,Morocco,South Africa,Tunisia,Australia,New Zealand,Argentina,Bolivia,Brazil,Chile,Colombia,Ecuador,Paraguay,Peru,Uruguay,Canada,Costa Rica,Dominican Republic,El Salvador,Guatemala,Honduras,Mexico,Nicaragua,Panama,United States,Andorra,Austria,Belgium,Bulgaria,Cyprus,Czech Republic,Denmark,Estonia,Finland,France,Germany,Greece,Hungary,Iceland,Ireland,Italy,Latvia,Liechtenstein,Lithuania,Luxembourg,Malta,Monaco,Netherlands,Norway,Poland,Portugal,Romania,Slovakia,Spain,Sweden,Switzerland,Turkey,United Kingdom,Russia,Belarus,Kazakhstan,Moldova,Ukraine,Albania,Bosnia,Croatia,Montenegro,North Macedonia,Serbia,Slovenia,Kosovo,Bahrain,Hong Kong,India,Indonesia,Israel,Japan,Jordan,Kuwait,Lebanon,Malaysia,Oman,Palestine,Philippines,Qatar,Saudi Arabia,Singapore,Taiwan,Thailand,United Arab Emirates,Vietnam".split(","),t(86)),x=t.n(j),N=t(227),P=t(223),B=t(224),R=t(226),M=t(222),_=Object(E.a)((function(a){return{root:{height:"100vh"},image:{backgroundImage:"url(".concat(x.a,")"),backgroundRepeat:"no-repeat",backgroundColor:a.palette.secondary.main,backgroundSize:"50$ 50%",backgroundPosition:"center"},paper:{margin:a.spacing(8,4),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:a.spacing(1),backgroundColor:a.palette.primary.main},form:{width:"100%",marginTop:a.spacing(1)},submit:{margin:a.spacing(15,0,15),height:75},title:{color:a.palette.primary.main}}}));function z(){return r.a.createElement(M.a,{variant:"body2",color:"textSecondary",align:"center"},"Copyright \xa9 Khant Thurein Han (Leo) ",(new Date).getFullYear(),".")}var U=function(){var a=_(),e=Object(n.useState)(!1),t=Object(O.a)(e,2),o=t[0],i=t[1],c={client_id:C,response_type:"code",redirect_uri:"http://"+window.location.host,scope:"streaming user-read-email user-read-private user-library-read user-library-modify user-read-playback-state user-modify-playback-state"};return Object(n.useEffect)((function(){o&&window.location.assign("https://accounts.spotify.com/authorize?"+L.a.stringify(c))})),r.a.createElement(N.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:a.submit,onClick:function(){return i(!0)}},"Login to Spotify")};var D=function(){var a,e=_(),t=Object(g.b)();if(window.location.search){var n=L.a.parse(window.location.href.split("?")[1]);t((a=n.code,function(e){var t={grant_type:"authorization_code",code:a,redirect_uri:"http://localhost:3000"},n={headers:{Authorization:"Basic ".concat(window.btoa(C+":369dcf6887044b5daa55adedc9576a92")),"content-type":"application/x-www-form-urlencoded"}};m.a.post("https://accounts.spotify.com/api/token",L.a.stringify(t),n).then((function(a){e({type:"SET_AUTHORIZATION",payload:a.data})})).catch((function(a){return console.log(a.response.data)}))}))}var o=Object(g.c)((function(a){return a.root.authenticated}));return r.a.createElement("div",null,o?r.a.createElement(v.a,{to:"/map"}):r.a.createElement(w.a,{container:!0,component:"main",className:e.root},r.a.createElement(P.a,null),r.a.createElement(w.a,{item:!0,xs:!1,sm:4,md:7,className:e.image}),r.a.createElement(w.a,{item:!0,xs:12,sm:8,md:5,component:B.a,elevation:6,square:!0},r.a.createElement("div",{className:e.paper},r.a.createElement(M.a,{component:"h1",variant:"h2",className:e.title},"Geo-Spotify"),r.a.createElement(R.a,{mt:12},r.a.createElement(M.a,{variant:"h4"},"Explore what's featured on Spotify around the globe!")),r.a.createElement(U,null),r.a.createElement(R.a,{mt:5},r.a.createElement(z,null))))))},K=t(36),G=t(88),H=t(225),Y=Object(G.a)(Object(c.a)({},S));var F=function(){return r.a.createElement(n.Fragment,null,r.a.createElement(H.a,{theme:Y},r.a.createElement(K.a,null,r.a.createElement(v.d,null,r.a.createElement(v.b,{path:"/map"},r.a.createElement(T,null)),r.a.createElement(v.b,{path:"/"},r.a.createElement(D,null))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var J=t(26),W=t(87),V={token:"",dataLoaded:!1,refreshToken:"",countryData:[],authenticated:!1,playlists:[],playlist:""},Z=[W.a],Q={root:function(){var a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:V,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"SET_AUTHORIZATION":return Object(c.a)(Object(c.a)({},a),{},{token:e.payload.access_token,authenticated:!0});case"SET_COUNTRYDATA_PLAYLISTS":return Object(c.a)(Object(c.a)({},a),{},{dataLoaded:!0,countryData:e.payload.countryData,playlists:e.payload.playlists});case"SET_PLAYLIST":return Object(c.a)(Object(c.a)({},a),{},{playlist:e.payload});default:return Object(c.a)({},a)}}},$=Object(J.e)(Object(J.c)(Q),{token:"",dataLoaded:!1,refreshToken:"",authenticated:!1,playlists:[]},Object(J.d)(J.a.apply(void 0,Z)));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(g.a,{store:$},r.a.createElement(F,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(a){a.unregister()})).catch((function(a){console.error(a.message)}))},86:function(a,e,t){a.exports=t.p+"static/media/login.9fd6c7ab.png"},95:function(a,e,t){a.exports=t(196)}},[[95,1,2]]]);
//# sourceMappingURL=main.9ebfdf0d.chunk.js.map