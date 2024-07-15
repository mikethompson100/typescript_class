function GetReview(title: string): string | number {
    if (title === 'A New Hope') {
        return 'An instant classic!';
    } else {
        return Math.floor(Math.random() * 10);
    }
}
