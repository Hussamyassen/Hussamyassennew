/** Minimal safe renderer for the subset of Markdown used by curated article records. */
export function escapeHtml(s:string){return s.replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]!));}
export function inline(s:string){return escapeHtml(s).replace(/\*\*(.+?)\*\*/g,'<strong>$1</strong>');}
export function sectionize(body:string){
 const sections=body.split(/^## /m).filter(Boolean);
 return sections.map((chunk,i)=>{const [heading,...rest]=chunk.split('\n\n');const id='section-'+(i+1);
 let html=''; for(let j=0;j<rest.length;j++){
  const block=rest[j];if(!block) continue;if(block.startsWith('| ')){
   const rows=block.split('\n').filter(l=>l.trim().startsWith('|')).map(l=>l.trim().slice(1,-1).split('|').map(v=>v.trim()));
   if(rows.length>=3){html+='<div class="article-table-scroll"><table><thead><tr>'+rows[0]!.map(c=>'<th scope="col">'+inline(c)+'</th>').join('')+'</tr></thead><tbody>'+rows.slice(2).map(row=>'<tr>'+row.map(c=>'<td>'+inline(c)+'</td>').join('')+'</tr>').join('')+'</tbody></table></div>';}
  }else{html+='<p>'+inline(block)+'</p>';}
 }
 return {id,heading:(heading??'').trim(),html}; });}
