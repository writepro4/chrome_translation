document.querySelectorAll("pre, code, figure").forEach(function (e) {
    e.classList.add('notranslate');
});


// const targetNode = document.querySelector('html');
// const config = {attributes: true, childList: true, subtree: true};
// const callback = (mutationsList, observer) => {
//     for (const mutation of mutationsList) {
//         const tagName = mutation.target.tagName;
//         if (tagName === 'IFRAME') {
//             changeClassName(mutation.target);
//
//         }
//     }
// };
// const observer = new MutationObserver(callback);
//
// let index = 1;
// const changeClassName = (target) => {
//     index = index + 1;
//     console.log('[' + index + '] targetTag => ', target.tagName);
//
// }
//
// observer.observe(targetNode, config);