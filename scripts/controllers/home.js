export async function home() {
    this.partials = await this.app.partialLoader.call(this);
    this.headerColor = 'dark';
    this.home = 'active';
    $(window).unbind('scroll');
    // try {
    //     this.items = await (await this.app.requestData('getAll')).json();
    //     // this.app.toggleBox('loadingBox');
    //     if (this.items.hasOwnProperty('errorData')) {
    //         const errorMessage = this.items.message;
    //         this.items = null;
    //         throw new Error(errorMessage);
    //     }
    //     // this.items.sort((a, b) => b.peopleInterested - a.peopleInterested);
    //     // this.partial('../../templates/cinema.hbs', { username, items, search });
    // } catch (err) {
    //     // this.app.toggleBox('errorBox', err);
    //     alert(err);
    // }

    this.partial('../../templates/home.hbs').then(() => {
        this.app.navbarChanger(200, 'bg-secondary');
    });
}