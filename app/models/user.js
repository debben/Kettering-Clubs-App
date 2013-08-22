
/*!
 * Module dependencies
 */

var mongoose = require('mongoose')
var Schema = mongoose.Schema
var mongooseAuth = require("mongoose-auth");

var  authTypes = ['google'];


module.exports = function(config){
    /**
     * User schema
     */
    
    var UserSchema = new Schema({}), User;
    
    
    
    /**
     * User plugin
     */
    
    UserSchema.plugin(mongooseAuth, {
        everymodule: {
          everyauth: {
              User: function () {
                return User;
              }
          }
        },
         google: {
          everyauth: {
              myHostname: 'http://kettering-clubs-app.debben.c9.io/'
            , appId: config.google.clientID
            , appSecret: config.google.clientSecret
            , redirectPath: '/'
            , scope: [
        'https://www.googleapis.com/auth/userinfo.profile',
        'https://www.googleapis.com/auth/userinfo.email'
      ]
          }
        }
    }
    );
    
    
    
    /**
     * Add your
     * - pre-save hooks
     * - validations
     * - virtuals
     */
    
    /**
     * Methods
     */
    
    
    UserSchema.method({
    
    })
    
    /**
     * Validations
     */
     
     
    
    /**
     * Statics
     */
    
    UserSchema.statics.skipValidation = true;
    
    /**
     * Register
     */
    
    mongoose.model('User', UserSchema)
}