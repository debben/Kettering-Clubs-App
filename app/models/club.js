
/*!
 * Module dependencies
 */

var mongoose = require('mongoose')
var Schema = mongoose.Schema

module.exports = function(config){
    
    /**
     * User schema
     */
    
    var ClubSchema = new Schema({
      name: { type: String, default: '' },
      admin: {type : Schema.ObjectId, ref : 'User'},
      // meetingTimes:{
          
      // }
      
    })
    
    
    
    /**
     * Add your
     * - pre-save hooks
     * - validations
     * - virtuals
     */
    
    /**
     * Methods
     */
    
    ClubSchema.method({
    
    })
    
    /**
     * Statics
     */
    
    ClubSchema.static({
    
    })
    
    /**
     * Register
     */
    
    mongoose.model('Club', ClubSchema)
}