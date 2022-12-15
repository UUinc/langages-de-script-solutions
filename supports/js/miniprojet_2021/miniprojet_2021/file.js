var inputText = document.querySelector("input");
var btn = document.querySelector("button");
var container = document.querySelector(".comments-list");
btn.addEventListener("click", (e) => {
    e.preventDefault();
    var inputValue = inputText.value;
    var text = `<div class="fourth-container-wrapper">
                    <div class="fourth-container-left">
                        <div class="image-user">
                            <img src="images/user2.jpg" alt="">
                        </div>
                        <div class="info-user">
                            <div class="info-user-top">
                                <h4>Tom KLIEN</h4>
                            </div>
                            <p>${inputText.value}</p>
                        </div>
                    </div>
                    <div class="fourth-container-right">
                        <h2 style='color: #f3da35'>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star-half"></i>
                        </h2>
                    </div>
                </div>`;
    if (inputValue.length >= 5) {
        container.insertAdjacentHTML("beforeend", text);
        inputText.value = "";
    } else {
        alert("please write a comment before submit");
    }
});

window.addEventListener("keypress", (e) => {
    if (e.key == "Enter") {
        var inputValue = inputText.value;
        var text = `<div class="fourth-container-wrapper">
                    <div class="fourth-container-left">
                        <div class="image-user">
                            <img src="images/user2.jpg" alt="">
                        </div>
                        <div class="info-user">
                            <div class="info-user-top">
                                <h4>Tom KLIEN</h4>
                            </div>
                            <p>${inputText.value}</p>
                        </div>
                    </div>
                    <div class="fourth-container-right">
                        <h2 style='color: #f3da35'>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star-half"></i>
                        </h2>
                    </div>
                </div>`;
        if (inputValue.length >= 5) {
            container.insertAdjacentHTML("beforeend", text);
            inputText.value = "";
        } else {
            alert("please write a comment before submit");
        }
    }
});
