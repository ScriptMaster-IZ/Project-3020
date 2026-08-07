function blogger () {
 const blogList = document.getElementById("blog-list");

 fetch("data/posts.json")  //get news file

.then(response =>response.json())  //get arrawy of news

.then(posts => {  

		posts.forEach(post => {  //loop trhough all array

 		const postElement = document.createElement("div");
		

 //create fic for each news item in array

		 postElement.classList.add("post-card");


p = document.createElement("p");
p.classList.add("post-meta");
p.innerText = post.category+" "+ post.date;
 postElement.appendChild(p);



p = document.createElement("p");
p.innerText = post.title;
 postElement.appendChild(p);


p = document.createElement("p");
p.innerText = post.summary;
 postElement.appendChild(p);

p = document.createElement("p");
p.innerText = post.content;
 postElement.appendChild(p);


//const p = document.createElement("p");p.innerText = JSON.stringify(post); blogList.appendChild(p);

		


blogList.appendChild(postElement);



		
				
	       
		



					})




		})

	.catch(error => console.error("Error loading posts:", error));

}