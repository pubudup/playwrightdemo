
export class Util {

   static uniqueId(){

        let length = 10;
        let result           = '';
        let characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let charactersLength = characters.length;
        for ( var i = 0; i < length; i++ ) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        console.log('ID is:: '+result);
        return result;

    }

    static getContactId(contactURL){
        let url = contactURL;
        console.log(':::::::::::::::::: Current URL: '+url+' ::::::::::::::::::::::');
        let contactId = url.match('cid=(.*)')[1];
        console.log(':::::::::::::::::: Contact ID: '+contactId+' ::::::::::::::::::::::');
        return contactId;
    }

    static takeScreenshot(page,testcaseId){
        page.screenshot({ path: __dirname+`/screenshots/`+testcaseId+`.png` });
        return testcaseId;
    }

}