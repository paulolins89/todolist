(()=>{"use strict";function e(e,t){this.title=e,this.duedate=t}const t=document.getElementById("addTaskBtn"),n=document.getElementById("taskcontainer");let d=[];t.addEventListener("click",(()=>{n.insertBefore(function(){let e=document.createElement("form"),t=document.createElement("input");t.setAttribute("type","text"),t.setAttribute("id","taskName"),t.required=!0;let n=document.createElement("input");n.setAttribute("type","date"),n.setAttribute("id","dueDate");let d=document.createElement("input");return d.setAttribute("type","button"),d.setAttribute("value","Add"),d.setAttribute("id","submitTask"),e.appendChild(t),e.appendChild(n),e.appendChild(d),e}(),t),t.style.display="none",document.getElementById("submitTask").addEventListener("click",(t=>{t.preventDefault();let n=document.getElementById("taskName").value,u=document.getElementById("dueDate").value;d.push(new e(n,u)),console.log(d)}))}))})();