(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{143:function(e,t){},167:function(e,t,r){"use strict";r.r(t);var n=r(0),c=r.n(n),s=r(27),i=r.n(s),a=(r(106),r(221)),o=r(1),l=function(){return Object(o.jsxs)(a.a,{fluid:!0,className:"login-container",children:[Object(o.jsxs)("div",{className:"descript",children:[Object(o.jsxs)("div",{className:"topify-title",children:[Object(o.jsx)("img",{src:"./topify-logo.svg",alt:"logo-svg",className:"topify-logo"}),Object(o.jsx)("h1",{children:"Topify"})]}),Object(o.jsx)("h3",{children:" Find out your most listened Tracks and Artists on Spotify."}),Object(o.jsxs)("a",{className:"btn btn-success btn-lg",href:"https://accounts.spotify.com/authorize?client_id=b256d996ac324a3fa6765ae4287a195f&response_type=code&redirect_uri=https://topify-web.herokuapp.com/&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state%20user-read-recently-played%20user-read-playback-state%20user-top-read%20playlist-modify-public%20playlist-modify-private",children:[Object(o.jsx)("i",{className:"fa fa-spotify","aria-hidden":"true"})," Connect with Spotify"]})]}),Object(o.jsxs)("div",{className:"video-container",children:[Object(o.jsx)("div",{children:Object(o.jsxs)("video",{autoPlay:!0,loop:!0,muted:!0,playsInline:!0,children:[Object(o.jsx)("source",{src:"./Videos/topify.mp4",type:"video/mp4"}),"Sorry, your browser doesn't support embedded videos."]})}),Object(o.jsxs)("p",{children:["You can disconnect Topify from your Spotify account"," ",Object(o.jsx)("a",{href:"https://www.spotify.com/us/account/apps/",target:"_blank",rel:"noreferrer",children:"here"})]})]}),Object(o.jsxs)("footer",{children:["Made out of love for Music & Spotify. Created by"," ",Object(o.jsx)("a",{href:"https://github.com/hemani-gajjar",target:"_blank",rel:"noopener noreferrer",children:"Hemani"}),", powered by Spotify"]})]})},d=r(6),j=r(59),u=r.n(j);var b=r(83),m=r.n(b),h=r(214),p=r(219),x=r(209);function O(e){var t=e.track;return Object(o.jsx)(h.a,{componentsProps:{tooltip:{sx:{bgcolor:Object(x.a)("#3c3f5f",.98),"& .MuiTooltip-arrow":{color:Object(x.a)("#3c3f5f",.98)},minWidth:350}}},title:Object(o.jsx)(c.a.Fragment,{children:Object(o.jsxs)(p.a,{sx:{p:2,minWidth:300,textAlign:"left"},children:[Object(o.jsxs)(p.a,{color:"#FBFBFB",children:[t.index," ",t.title]}),"SINGLE"===t.type?Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)(p.a,{color:"#FBFBFB",sx:{minWidth:300},children:[" ","Single By"," ",Object(o.jsx)("strong",{children:Object(o.jsx)("span",{style:{color:"darkgrey"},children:t.artist})})]})}):Object(o.jsxs)(o.Fragment,{children:[Object(o.jsxs)(p.a,{color:"#FBFBFB",sx:{minWidth:300},children:[" ","Track By"," ",Object(o.jsx)("strong",{children:Object(o.jsx)("span",{style:{color:"darkgrey"},children:t.artist})})]}),Object(o.jsxs)(p.a,{color:"#FBFBFB",children:["Appears on the album",Object(o.jsxs)("span",{style:{color:"darkgrey"},children:[" ",Object(o.jsx)("strong",{children:t.albumName})," "]})]}),Object(o.jsxs)(p.a,{color:"#FBFBFB",children:["Track No. ",t.trackNumber," of ",t.totalTracks]})]}),Object(o.jsxs)(p.a,{color:"#FBFBFB",children:["Popularity on Spotify - ",t.popularity]}),Object(o.jsxs)(p.a,{color:"#FBFBFB",children:["Released on ",t.releaseDate]})]})}),arrow:!0,children:Object(o.jsxs)("div",{className:"top-track-card",children:[Object(o.jsx)("a",{href:t.uri,children:Object(o.jsx)("img",{src:t.albumUrl,alt:"track-cover"})}),Object(o.jsx)("div",{className:"title",children:t.title.substring(0,20)}),Object(o.jsx)("div",{className:"text-mute",children:t.artist})]})})}function f(e){var t=e.artist;return Object(o.jsx)(h.a,{componentsProps:{tooltip:{sx:{bgcolor:Object(x.a)("#3c3f5f",.98),"& .MuiTooltip-arrow":{color:Object(x.a)("#3c3f5f",.98)},minWidth:350}}},title:Object(o.jsx)(c.a.Fragment,{children:Object(o.jsxs)(p.a,{sx:{p:2,minWidth:300,textAlign:"left"},children:[Object(o.jsxs)(p.a,{color:"#FBFBFB",children:[t.index," ",t.name]}),Object(o.jsxs)(p.a,{color:"#FBFBFB",sx:{minWidth:300},children:[" ","Genres -"," ",Object(o.jsx)("strong",{children:Object(o.jsx)("span",{style:{color:"darkgrey"},children:t.genres.join(", ")})})]}),Object(o.jsxs)(p.a,{color:"#FBFBFB",children:["Popularity on Spotify - ",t.popularity]})]})}),arrow:!0,children:Object(o.jsxs)("div",{className:"top-artist-card",children:[Object(o.jsx)("a",{href:t.uri,children:Object(o.jsx)("img",{src:t.image,alt:"artist",className:"top-artist-img"})}),Object(o.jsx)("div",{className:"title",children:t.name})]})})}function g(e){var t=e.changeSelect;return Object(o.jsx)("div",{className:"drop-down-container",onChange:t,children:Object(o.jsxs)("select",{name:"duration",className:"drop-down-tracks",children:[Object(o.jsx)("option",{value:"long_term",children:"all time"}),Object(o.jsx)("option",{value:"medium_term",children:"last 6 months"}),Object(o.jsx)("option",{value:"short_term",children:"last month"})]})})}function y(e){var t=e.handleChangeArtist;return Object(o.jsx)("div",{className:"drop-down-container",onChange:t,children:Object(o.jsxs)("select",{name:"duration",className:"drop-down-artists",children:[Object(o.jsx)("option",{value:"short_term",children:"last month"}),Object(o.jsx)("option",{value:"long_term",children:"all time"}),Object(o.jsx)("option",{value:"medium_term",children:"last 6 months"})]})})}r(162);var v=r(220),k=r(215),F=r(218);function B(e){var t=e.user,r=n.useState(null),c=Object(d.a)(r,2),s=c[0],i=c[1],a=Boolean(s),l=function(){i(null)};return Object(o.jsxs)("div",{className:"userIcon",children:[Object(o.jsxs)(v.a,{id:"basic-button","aria-controls":a?"basic-menu":void 0,"aria-haspopup":"true","aria-expanded":a?"true":void 0,onClick:function(e){i(e.currentTarget)},sx:{textTransform:"none",color:"#eeeeee",mr:8,mt:1,mb:0,ml:0},children:[Object(o.jsx)("img",{src:t.image,alt:"user",className:"user-profile-img"}),t.name]}),Object(o.jsxs)(k.a,{id:"basic-menu",anchorEl:s,open:a,onClose:l,MenuListProps:{"aria-labelledby":"basic-button"},className:"menu-profile",children:[Object(o.jsxs)("a",{href:"https://github.com/hemani-gajjar/Topify#usage",target:"_blank",rel:"noreferrer",children:[Object(o.jsxs)(F.a,{sx:{textDecoration:"none",color:"black"},onClick:l,children:["About Topify"," "]})," "]}),Object(o.jsx)("a",{href:"/",children:Object(o.jsx)(F.a,{sx:{textDecoration:"none",color:"black"},onClick:function(){i(null),window.open(" https://accounts.spotify.com/en/logout")},children:"Logout"})})]})]})}var S=r(87),w=r.n(S);function N(e){var t=e.handlePlaylistBtn,r=e.pickedArtists,c=e.handleRefresh;return Object(o.jsxs)("div",{className:"generate-playlist-container",children:[Object(o.jsx)("h1",{children:"Discover Music based on your taste"}),Object(o.jsxs)("div",{className:"generate-playlist",children:[Object(o.jsx)("div",{className:"left",children:Object(o.jsx)("div",{className:"picked-artists",children:Object(o.jsx)("div",{className:"row",children:r.map((function(e){return Object(o.jsx)("div",{className:"col-sm padding-0",children:Object(o.jsxs)("div",{className:"artist-card",children:[Object(o.jsx)("a",{href:e.uri,children:Object(o.jsx)("img",{src:e.image,alt:"picked-artist"})}),Object(o.jsx)("p",{children:e.name}),Object(o.jsx)("p",{children:Object(o.jsx)("strong",{children:Object(o.jsx)("span",{style:{color:"darkgrey"},children:e.genres.slice(0,2).join(", ")})})})]})},e.index)}))})})}),Object(o.jsxs)("div",{className:"right",children:[Object(o.jsx)(p.a,{sx:{maxWidth:320,pb:3,pt:3,fontSize:22,color:"darkgrey"},children:Object(o.jsxs)("strong",{children:[" ","Generate a mix of recommended tracks based on your top artists"]})}),Object(o.jsxs)(v.a,{variant:"contained",onClick:c,size:"large",sx:{m:1,textTransform:"none",fontSize:18,backgroundColor:"#46476d",":hover":{backgroundColor:"#353753"}},children:[Object(o.jsx)(w.a,{sx:{mr:1}})," Refresh Artists"]})]})]}),Object(o.jsx)(h.a,{componentsProps:{tooltip:{sx:{bgcolor:Object(x.a)("#3c3f5f",.98),"& .MuiTooltip-arrow":{color:Object(x.a)("#3c3f5f",.98)},minWidth:350}}},title:Object(o.jsx)(n.Fragment,{children:Object(o.jsx)(p.a,{color:"#FBFBFB",sx:{p:2,minWidth:300,textAlign:"center"},children:"Generate a playlist in your spotify account with the recommended tracks!"})}),arrow:!0,children:Object(o.jsx)(v.a,{variant:"contained",onClick:t,sx:{m:1,fontSize:18,textTransform:"none",backgroundColor:"#46476d",":hover":{backgroundColor:"#353753"}},size:"large",children:"Generate Playlist"})}),Object(o.jsx)("p",{})]})}function T(e){var t=e.sortedTracks,r=e.sortedArtists;return Object(o.jsxs)("div",{className:"unique-music",children:[Object(o.jsxs)("div",{className:"unique-tracks",children:[Object(o.jsx)("h1",{children:"Your most unique tracks"}),Object(o.jsx)("div",{children:Object(o.jsx)("div",{className:"row",children:t.sort((function(e,t){return e.popularity>t.popularity?1:t.popularity>e.popularity?-1:0})).slice(0,7).map((function(e){return Object(o.jsx)("div",{className:"col-sm padding-0",children:Object(o.jsx)(h.a,{componentsProps:{tooltip:{sx:{bgcolor:Object(x.a)("#3c3f5f",.98),"& .MuiTooltip-arrow":{color:Object(x.a)("#3c3f5f",.98)},minWidth:350}}},title:Object(o.jsx)(n.Fragment,{children:Object(o.jsxs)(p.a,{sx:{p:2,minWidth:300,textAlign:"left"},children:[Object(o.jsx)(p.a,{color:"#FBFBFB",children:e.title}),"SINGLE"===e.type?Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)(p.a,{color:"#FBFBFB",sx:{minWidth:300},children:[" ","Single By"," ",Object(o.jsx)("strong",{children:Object(o.jsx)("span",{style:{color:"darkgrey"},children:e.artist})})]})}):Object(o.jsxs)(o.Fragment,{children:[Object(o.jsxs)(p.a,{color:"#FBFBFB",sx:{minWidth:300},children:[" ","Track By"," ",Object(o.jsx)("strong",{children:Object(o.jsx)("span",{style:{color:"darkgrey"},children:e.artist})})]}),Object(o.jsxs)(p.a,{color:"#FBFBFB",children:["Appears on the album",Object(o.jsxs)("span",{style:{color:"darkgrey"},children:[" ",Object(o.jsx)("strong",{children:e.albumName})," "]})]}),Object(o.jsxs)(p.a,{color:"#FBFBFB",children:["Track No. ",e.trackNumber," of"," ",e.totalTracks]})]}),Object(o.jsxs)(p.a,{color:"#FBFBFB",children:["Popularity on Spotify - ",e.popularity]}),Object(o.jsxs)(p.a,{color:"#FBFBFB",children:["Released on ",e.releaseDate]})]})}),arrow:!0,children:Object(o.jsxs)("div",{className:"top-track-card",children:[Object(o.jsx)("a",{href:e.uri,children:Object(o.jsx)("img",{src:e.albumUrl,alt:"track-cover"})}),Object(o.jsx)("div",{className:"title",children:e.title.substring(0,20)}),Object(o.jsx)("div",{className:"text-mute",children:e.artist})]})})},e.index)}))})})]}),Object(o.jsxs)("div",{className:"unique-artists",children:[Object(o.jsx)("h1",{children:"Your most unique artists"}),Object(o.jsx)("div",{className:"row",children:r.sort((function(e,t){return e.popularity>t.popularity?1:t.popularity>e.popularity?-1:0})).slice(0,7).map((function(e){return Object(o.jsx)("div",{className:"col-sm padding-0",children:Object(o.jsx)(h.a,{componentsProps:{tooltip:{sx:{bgcolor:Object(x.a)("#3c3f5f",.98),"& .MuiTooltip-arrow":{color:Object(x.a)("#3c3f5f",.98)},minWidth:350}}},title:Object(o.jsx)(n.Fragment,{children:Object(o.jsxs)(p.a,{sx:{p:2,minWidth:300,textAlign:"left"},children:[Object(o.jsx)(p.a,{color:"#FBFBFB",children:e.name}),Object(o.jsxs)(p.a,{color:"#FBFBFB",sx:{minWidth:300},children:[" ","Genres -"," ",Object(o.jsx)("strong",{children:Object(o.jsx)("span",{style:{color:"darkgrey"},children:e.genres.join(", ")})})]}),Object(o.jsxs)(p.a,{color:"#FBFBFB",children:["Popularity on Spotify - ",e.popularity]})]})}),arrow:!0,children:Object(o.jsxs)("div",{className:"top-artist-card",children:[Object(o.jsx)("a",{href:e.uri,children:Object(o.jsx)("img",{src:e.image,alt:"artist",className:"top-artist-img"})}),Object(o.jsx)("div",{className:"title",children:e.name})]})})},e.index)}))})]})]})}var M=r(217),_=function(){window.open(" https://accounts.spotify.com/en/logout")};function L(){return Object(o.jsxs)("div",{className:"homepage-footer",children:[Object(o.jsx)("p",{children:"Made out of love for Music & Spotify"}),Object(o.jsx)("span",{children:"|"}),Object(o.jsx)("a",{href:"https://github.com/hemani-gajjar/Topify#usage",target:"_blank",rel:"noreferrer",children:"About"}),Object(o.jsx)("span",{children:"|"}),Object(o.jsx)("a",{href:"/",onClick:_,children:"Logout"})]})}var C=new m.a({clientId:"b256d996ac324a3fa6765ae4287a195f"});function A(e){var t=function(e){var t=Object(n.useState)(),r=Object(d.a)(t,2),c=r[0],s=r[1],i=Object(n.useState)(),a=Object(d.a)(i,2),o=a[0],l=a[1],j=Object(n.useState)(),b=Object(d.a)(j,2),m=b[0],h=b[1];return Object(n.useEffect)((function(){u.a.post("http://localhost:5000/login",{code:e}).then((function(e){s(e.data.accessToken),l(e.data.refreshToken),h(e.data.expiresIn),window.history.pushState({},null,"/")})).catch((function(){window.location="/"}))}),[e]),Object(n.useEffect)((function(){if(o&&m){var e=setInterval((function(){u.a.post("http://localhost:5000/refresh",{refreshToken:o}).then((function(e){s(e.data.accessToken),h(e.data.expiresIn)})).catch((function(){window.location="/"}))}),1e3*(m-60));return function(){return clearInterval(e)}}}),[o,m]),c}(e.code),r=Object(n.useState)([]),c=Object(d.a)(r,2),s=c[0],i=c[1],l=Object(n.useState)([]),j=Object(d.a)(l,2),b=j[0],m=j[1],h=Object(n.useState)("long_term"),p=Object(d.a)(h,2),x=p[0],v=p[1],k=Object(n.useState)("short_term"),F=Object(d.a)(k,2),S=F[0],w=F[1],_=Object(n.useState)({}),A=Object(d.a)(_,2),P=A[0],E=A[1],W=window.screen.width,H=Object(n.useState)([]),D=Object(d.a)(H,2),I=D[0],q=D[1],Y=Object(n.useState)([]),z=Object(d.a)(Y,2),G=z[0],R=z[1],U=Object(n.useState)(""),J=Object(d.a)(U,2),V=J[0],K=J[1],Q=Object(n.useState)([]),X=Object(d.a)(Q,2),Z=X[0],$=X[1],ee=Object(n.useState)([]),te=Object(d.a)(ee,2),re=te[0],ne=te[1],ce=Object(n.useState)([]),se=Object(d.a)(ce,2),ie=se[0],ae=se[1],oe=Object(n.useState)(!1),le=Object(d.a)(oe,2),de=le[0],je=le[1],ue=b.slice(0,1).map((function(e){return e.name})),be=b.slice(0,1).map((function(e){return e.name})),me=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:49,r=t-e,n=Math.random();return n=Math.floor(n*r),n+=e};document.addEventListener("DOMContentLoaded",(function(){var e=document.querySelector(".expand-btn-tracks");e.addEventListener("click",(function(t){var r=document.querySelector(".grid-container-tracks");e.classList.toggle("button-pressed"),e.classList.contains("button-pressed")?(r.style.maxHeight=r.scrollHeight+"px","See More"===e.innerHTML&&(e.innerHTML="See Less")):(r.style.maxHeight=0,"See Less"===e.innerHTML&&(e.innerHTML="See More")),t.stopImmediatePropagation()}))})),document.addEventListener("DOMContentLoaded",(function(){var e=document.querySelector(".expand-btn-artists");e.addEventListener("click",(function(t){var r=document.querySelector(".grid-container-artists");e.classList.toggle("button-pressed"),e.classList.contains("button-pressed")?(r.style.maxHeight=r.scrollHeight+"px","See More"===e.innerHTML&&(e.innerHTML="See Less")):(r.style.maxHeight=0,"See Less"===e.innerHTML&&(e.innerHTML="See More")),t.stopImmediatePropagation()}))})),Object(n.useEffect)((function(){t&&C.setAccessToken(t)}),[t]),Object(n.useEffect)((function(){t&&C.getMyTopTracks({limit:50,time_range:x}).then((function(e){i(e.body.items.map((function(t){var r=t.album.images.reduce((function(e,t){return t.height>e.height?t:e}),t.album.images[0]),n=new Date(t.album.release_date);return{artist:t.artists[0].name,title:t.name,uri:t.uri,albumUrl:r.url,popularity:t.popularity,trackNumber:t.track_number,index:e.body.items.indexOf(t)+1,type:t.album.album_type,albumName:t.album.name,releaseDate:n.toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"}),totalTracks:t.album.total_tracks}})))}),(function(e){console.log("Something went wrong!",e)}))}),[t,x]),Object(n.useEffect)((function(){t&&C.getMyTopArtists({limit:50,time_range:S}).then((function(e){m(e.body.items.map((function(t){var r=t.images.reduce((function(e,t){return t.height>e.height?t:e}),t.images[0]);return{name:t.name,popularity:t.popularity,uri:t.uri,image:r.url,index:e.body.items.indexOf(t)+1,genres:t.genres}})))}),(function(e){console.log("Something went wrong!",e)}))}),[t,S]),Object(n.useEffect)((function(){t&&(C.getMyTopTracks({limit:50,time_range:"long_term"}).then((function(e){ne(e.body.items.map((function(t){var r=t.album.images.reduce((function(e,t){return t.height>e.height?t:e}),t.album.images[0]),n=new Date(t.album.release_date);return{artist:t.artists[0].name,title:t.name,uri:t.uri,albumUrl:r.url,popularity:t.popularity,trackNumber:t.track_number,index:e.body.items.indexOf(t)+1,type:t.album.album_type,albumName:t.album.name,releaseDate:n.toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"}),totalTracks:t.album.total_tracks}})))}),(function(e){console.log("Something went wrong!",e)})),C.getMyTopArtists({limit:50,time_range:"long_term"}).then((function(e){ae(e.body.items.map((function(t){var r=t.images.reduce((function(e,t){return t.height>e.height?t:e}),t.images[0]);return{name:t.name,popularity:t.popularity,uri:t.uri,image:r.url,index:e.body.items.indexOf(t)+1,genres:t.genres}})))}),(function(e){console.log("Something went wrong!",e)})))}),[t,S]),Object(n.useEffect)((function(){t&&C.getMe().then((function(e){var t=e.body;E({name:t.display_name,image:t.images[0].url})}),(function(e){console.log("Something went wrong!",e)}))}),[t]);var he=function(){if(t){for(var e=[],r=[];e.length<5;){var n=b[me(0,49)];-1===e.indexOf(n)&&(e.push(n),r.push(n.uri.split(":")[2]))}R(e),q(r)}};Object(n.useEffect)((function(){he()}),[b]);Object(n.useEffect)((function(){console.log(V),console.log(Z),""!==V&&pe()}),[Z]);var pe=function(){C.addTracksToPlaylist(V,Z).then((function(e){201===e.statusCode&&(je(!0),console.log("Added tracks to playlist!"))}),(function(e){console.log("Something went wrong!",e)}))};return Object(o.jsxs)(a.a,{fluid:!0,className:"main-container",children:[Object(o.jsx)(B,{user:P}),Object(o.jsxs)("h1",{children:["Your top tracks of ",Object(o.jsx)(g,{changeSelect:function(){var e=document.querySelector(".drop-down-tracks");v(e.value)}})]}),Object(o.jsxs)("div",{className:"grid-container",children:[W<660&&W>460&&s.slice(0,2).map((function(e){return Object(o.jsx)(O,{track:e},e.uri)})),W<860&&W>=660&&s.slice(0,3).map((function(e){return Object(o.jsx)(O,{track:e},e.uri)})),W<1100&&W>=860&&s.slice(0,4).map((function(e){return Object(o.jsx)(O,{track:e},e.uri)})),(W>=1100||W<=460)&&s.slice(0,5).map((function(e){return Object(o.jsx)(O,{track:e},e.uri)}))]}),Object(o.jsxs)("div",{className:" grid-container grid-container-tracks",children:[W<660&&W>460&&s.slice(2,51).map((function(e){return Object(o.jsx)(O,{track:e},e.uri)})),W<860&&W>=660&&s.slice(3,51).map((function(e){return Object(o.jsx)(O,{track:e},e.uri)})),W<1100&&W>=860&&s.slice(4,51).map((function(e){return Object(o.jsx)(O,{track:e},e.uri)})),(W>=1100||W<=460)&&s.slice(5,51).map((function(e){return Object(o.jsx)(O,{track:e},e.uri)}))]}),Object(o.jsx)("div",{className:"btn-container",children:Object(o.jsx)("button",{type:"button",className:"expand-btn-tracks",children:"See More"})}),Object(o.jsxs)("h1",{children:["Your top artists of"," ",Object(o.jsx)(y,{handleChangeArtist:function(){var e=document.querySelector(".drop-down-artists");w(e.value)}})]}),Object(o.jsxs)("div",{className:"grid-container ",children:[W<660&&W>460&&b.slice(0,1).map((function(e){return Object(o.jsx)(f,{artist:e},e.uri)})),W<860&&W>=660&&b.slice(0,2).map((function(e){return Object(o.jsx)(f,{artist:e},e.uri)})),W<1100&&W>=860&&b.slice(0,3).map((function(e){return Object(o.jsx)(f,{artist:e},e.uri)})),(W>=1100||W<=460)&&b.slice(0,4).map((function(e){return Object(o.jsx)(f,{artist:e},e.uri)})),Object(o.jsxs)("div",{className:"text-container",children:["medium_term"===S&&Object(o.jsxs)("h3",{children:["You listen to a lot of",Object(o.jsx)("strong",{children:" "+be+" "})]}),"long_term"===S&&Object(o.jsxs)("h3",{children:["Your top artist of all time is",Object(o.jsx)("strong",{children:" "+be+" "})]}),"short_term"===S&&Object(o.jsxs)("h3",{children:["You've been listening to a lot of",Object(o.jsx)("strong",{children:" "+ue+" "}),"lately"]})]})]}),Object(o.jsxs)("div",{className:"grid-container  grid-container-artists",children:[W<660&&W>460&&b.slice(1,49).map((function(e){return Object(o.jsx)(f,{artist:e},e.uri)})),W<860&&W>=660&&b.slice(2,49).map((function(e){return Object(o.jsx)(f,{artist:e},e.uri)})),W<1100&&W>=860&&b.slice(3,49).map((function(e){return Object(o.jsx)(f,{artist:e},e.uri)})),(W>=1100||W)<460&&b.slice(4,49).map((function(e){return Object(o.jsx)(f,{artist:e},e.uri)}))]}),Object(o.jsx)("div",{className:"btn-container",children:Object(o.jsx)("button",{type:"button",className:"expand-btn-artists",children:"See More"})}),Object(o.jsx)(T,{sortedTracks:re,sortedArtists:ie}),Object(o.jsx)(N,{handlePlaylistBtn:function(){C.createPlaylist("Favourites Mixtape",{description:"Playlist based on ".concat(G[0].name,", ").concat(G[1].name,", ").concat(G[2].name,", ").concat(G[3].name," and ").concat(G[4].name),public:!0}).then((function(e){K(e.body.id),console.log("Created playlist!")}),(function(e){console.log("Something went wrong!",e)})),C.getRecommendations({min_energy:.4,seed_artists:I,min_popularity:50}).then((function(e){var t=e.body;console.log(t),$(e.body.tracks.map((function(e){return e.uri})))}),(function(e){console.log("Something went wrong!",e)}))},pickedArtists:G,handleRefresh:he}),Object(o.jsx)(M.a,{anchorOrigin:{vertical:"bottom",horizontal:"right"},open:de,onClose:function(){je(!1)},message:"A new playlist has been added. Check out your Spotify!",ContentProps:{sx:{background:"#4e527e"}}}),Object(o.jsx)(L,{})]})}var P=new URLSearchParams(window.location.search).get("code");var E=function(){return P?Object(o.jsx)("div",{children:Object(o.jsx)(A,{code:P})}):Object(o.jsx)(l,{})};i.a.render(Object(o.jsx)(c.a.StrictMode,{children:Object(o.jsx)(E,{})}),document.getElementById("root"))}},[[167,1,2]]]);
//# sourceMappingURL=main.6c066463.chunk.js.map