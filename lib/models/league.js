'use strict';
var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

/**
 * League Schema
 */
var LeagueSchema = new Schema({
  ownerUserId: {type: Schema.ObjectId, ref: 'User'},
  leagueName: {type: String},
  location: {type: String},
  teams: [{type: Schema.ObjectId, ref: 'Team'}]
});

///**
//*  Validations
//*/
//LeagueSchema.schema.path("League_Name").validate(function (value) {
//  //insert validation here
//}, "Invalid message");


mongoose.model('League', LeagueSchema);