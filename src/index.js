import "./styles.css";

const onClickAdd = () => {
  //テキストボックスの値を取得して変数に格納
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  // 未完了のTODOに追加するdivタグを生成
  const div = document.createElement("div");
  div.className = "list-row";

  // divタグの子要素となるliタグを生成
  const li = document.createElement("li");
  // 生成したliタグのテキストノードに、取得したテキストボックスの値を追加
  li.innerText = inputText;

  // button（完了）タグを生成
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    alert("完了");
  });

  // button(削除)タグを生成
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    //押された削除ボタンの親タグ div を未完了リストから削除
    const deleteTarget = deleteButton.parentNode;
    document.getElementById("incomplete-list").removeChild(deleteTarget);
  });

  // 生成したliタグをdivタグの子要素よして追加
  div.appendChild(li);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);

  // 未完了TODOのdivタグを未完了リストに追加
  document.getElementById("incomplete-list").appendChild(div);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
