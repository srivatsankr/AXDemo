import {enableDigitalKey} from 'digital-key-manager';
import {sendPushNotification} from 'push-notifications'
const sdk = require('@salesforce/salesforce-sdk');

/**
 * Describe Sendpushnotificationstoclients here.
 *
 * The exported method is the entry point for your code when the function is invoked. 
 *
 * Following parameters are pre-configured and provided to your function on execution: 
 * @param event:   represents the data associated with the occurrence of an event, and  
 *                 supporting metadata about the source of that occurrence.
 * @param context: represents the connection to Evergreen and your Salesforce org.
 * @param logger:  logging handler used to capture application logs and traces specific  
 *                 to a given execution of a function.
 */
//The below function will listen to platform event which will be fired when a trip is cancelled
//The trip cancellation platform event is invoked via process builder
//*** THE BELOW CODE IS JUST FOR ILLUSTRATION, ITS NOT TESTED NOT ITS COMPLETE SINCE SF EVERGEEEN IS NOT AVALIABLE YET** */
module.exports = async function (event, context, logger) {
    logger.info(`Invoking Sendpushnotificationstoclients with payload ${JSON.stringify(event.data || {})}`);
    //get Trip ID from the platform event.
    const tripId = event.payload.TripId__c;
    const query = "select id,Trip__c,Client__r.MobilePhone from TripBooking__c where Trip__c ='" + tripId + "'";
    const results = await context.org.data.query(query);
    logger.info(JSON.stringify(results));
    //Iterate the results to send push notifications below
    
    return results;
}
