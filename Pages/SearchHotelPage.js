class SearchHotelPage{

    constructor(page){
this.page=page;
this.city=page.locator('//select[@id="hotels"]')
this.hotel=page.locator('//select[@id="location"]');
this.rType=page.locator('//select[@id="room_type"]');
this.rNos=page.locator('//select[@id="room_nos"]');
this.submitbtn=page.locator('//input[@id="Submit"]');

    }
    async searchHotel(cityName,Hname,roomty,roomNos){
        await this.city.selectOption(cityName);
        await this.hotel.selectOption(Hname);
        await this.rType.selectOption(roomty);
        await this.rNos.selectOption(roomNos);
        await this.submitbtn.click();


    }
}
    module.exports={SearchHotelPage}
