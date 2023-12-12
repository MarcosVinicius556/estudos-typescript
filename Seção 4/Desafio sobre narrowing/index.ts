type Review = number | boolean;

function showUserReview(review: Review) { 
    if(!review){
        console.log('Nada enviado!');
        return;
    }
    if(typeof review === 'number') {
        if(review === 5) {
            console.log(`Muito dahora!`);
        } else if (review === 4) {
            console.log(`Até que é bom!`);
        } else if (review === 3) {
            console.log(`SO SO`);
        } else if (review === 2) {
            console.log(`Meio nhé`);
        } else if (review === 1) {
            console.log(`Horrível`);
        } else if (review === 0) {
            console.log(`Teria sido melhor ir ver o pelé!`);
        } else {
            console.log(`Que avaliação é essa doido?!`);
        }
    } else {
        console.log(`Nenhuma avalição informada`);
    }
}

showUserReview(6);
showUserReview(5);
showUserReview(4);
showUserReview(3);
showUserReview(2);
showUserReview(1);
showUserReview(0);
showUserReview(false);