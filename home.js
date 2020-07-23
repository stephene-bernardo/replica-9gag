let createBorder = function (childClass){
    let border = document.createElement("div");
    border.className = "border"
    let child = document.createElement("div")
    child.className = childClass
    
    border.appendChild(child);
    return border;
}

let createLi = function (childClass){
    let li = document.createElement("li");
    let child = document.createElement("div")
    child.className = childClass + " brighten-clickable"
    child.textContent = childClass.charAt(0).toUpperCase() + childClass.slice(1)
    li.appendChild(child)
    return li;
}

const memes = document.getElementsByClassName("meme");

for(let i=0; i< memes.length;i++){
    console.log(memes[i]);

    let reaction = document.createElement("div")
    reaction.className = "reaction"

    let left = document.createElement("div");
    left.className = "left"

    let upvote = createBorder("upvote")
    let downvote = createBorder("downvote")
    let comment = createBorder("comment")

    let border = document.createElement("div");
    border.className = "border"
    let ellipsis = document.createElement("div")
    ellipsis.className = "ellipsis"
    let ellipsis2 = document.createElement("div")
    ellipsis2.className = "ellipsis"
    let ellipsis3 = document.createElement("div")
    ellipsis3.className = "ellipsis"
    border.appendChild(ellipsis);
    border.appendChild(ellipsis2);
    border.appendChild(ellipsis3);

    left.appendChild(upvote);
    left.appendChild(downvote);
    left.appendChild(comment)
    left.appendChild(border)


    let ul = document.createElement("ul")

    let facebook = createLi("facebook")
    let pinterest = createLi("pinterest")
    
    ul.appendChild(facebook);
    ul.appendChild(pinterest);

    reaction.appendChild(left);
    reaction.appendChild(ul);
    memes[i].appendChild(reaction);
}