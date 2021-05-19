let btn_share = document.querySelector('button.share');
let btn_share_close = document.querySelector('button.share__close');

let toggleActive = () => {
    document.querySelector('button.share').classList.toggle('active');
    document.querySelector('button.share > img').classList.toggle('active');
    document.querySelector('.share-menu').classList.toggle('active');
    document.querySelector('.author').classList.toggle('active');
    document.querySelector('button.share__close').classList.toggle('active');
};

btn_share.addEventListener('click', toggleActive);
btn_share_close.addEventListener('click', toggleActive);

