/**
 * Created by Jason on 5/21/2017.
 */
class ClanInformation {

    extractClanInfo(account_id, json) {
        console.log('Clan - ' + account_id);
        console.log('Clan Info ' + JSON.stringify(json.account_id));
        return json.account_id;
    }
}

module.exports = ClanInformation;