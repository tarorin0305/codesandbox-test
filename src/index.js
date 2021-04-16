import "./styles.css";

// 追加ボタンの関数実装
const onClickAdd = () => {
  //テキストボックスの値を取得して変数に格納
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  createIncompleteList(inputText);
};

// 完了ボタンの関数実装
const onClickComplete = (target) => {
  // 完了対象のdivタグを再現して複製
  const completedTodoContainer = document.createElement("div");
  // 生成したdivタグにクラスを追加
  completedTodoContainer.classList.add("list-row");
  // 生成したdivタグに子要素であるliタグを追加
  // const completedTodoList = document.createElement("li");
  // completedTodoList.innerText = target.value;
  // completedTodoContainer.appendChild(completedTodoList);
  // 生成したdivタグに子要素であるbuttonタグを追加
  const uncompleteButton = document.createElement("button");
  uncompleteButton.innerText = "戻す";
  completedTodoContainer.appendChild(uncompleteButton);
  // 加工完了したdivタグをulタグの子要素として追加
  const newCompleteTodoList = document.getElementById("complete-list");
  newCompleteTodoList.appendChild(completedTodoContainer);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());

// 未完了リストから指定の要素を削除
const deleteFromIncompleteList = (target) => {
  document.getElementById("incomplete-list").removeChild(target);
};

// 未完了リストに追加する関数
const createIncompleteList = (text) => {
  // 未完了のTODOに追加するdivタグを生成
  const div = document.createElement("div");
  div.className = "list-row";

  // divタグの子要素となるliタグを生成
  const li = document.createElement("li");
  // 生成したliタグのテキストノードに、取得したテキストボックスの値を追加
  li.innerText = text;

  // button（完了）タグを生成
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  // 完了ボタンを押した際の処理を、完了ボタンのonClickイベントとして登録
  completeButton.addEventListener("click", () => {
    deleteFromIncompleteList(completeButton.parentNode);
    //完了リストに追加する要素
    const addTarget = completeButton.parentNode;
    // TODO内容テキストを取得
    const text = addTarget.firstElementChild.innerText;

    // div以下を初期化
    addTarget.textContent = null;

    // liタグ生成
    const li = document.createElement("li");
    li.innerText = text;
    //buttonタグ生成
    const backButton = document.createElement("button");
    backButton.innerText = "戻す";
    backButton.addEventListener("click", () => {
      // 押された戻すボタンの親タグを完了リストから削除
      const deleteTarget = backButton.parentNode;
      document.getElementById("complete-list").removeChild(deleteTarget);

      // テキスト取得
      const text = backButton.parentNode.firstElementChild.innerText;
      createIncompleteList(text);
    });
    //divタグの子要素に各要素を設定
    addTarget.appendChild(li);
    addTarget.appendChild(backButton);
    // 完了リストに追加
    document.getElementById("complete-list").appendChild(addTarget);
  });

  // button(削除)タグを生成
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    //押された削除ボタンの親タグ div を未完了リストから削除
    deleteFromIncompleteList(deleteButton.parentNode);
  });

  // 生成したliタグをdivタグの子要素よして追加
  div.appendChild(li);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);

  // 未完了TODOのdivタグを未完了リストに追加
  document.getElementById("incomplete-list").appendChild(div);
};
