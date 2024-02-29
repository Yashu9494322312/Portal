const observer=new IntersectionObserve((entries)=>{
                      entries.forEach((entry)=>{
		      console.log(entry)
		      if(entry.is Intersecting){
		      entry.target.classList.add('show');
		      }else{
		      entry.target.classList.remove('show');
		      }
		      });
		      });
const hiddenElements=document.queryselector All('.hidden);
hiddenElements.forEach((e1)=>observer.observe(e1));

		     