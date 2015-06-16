var express = require( 'express' );
var nodemailer = require( 'nodemailer' );
var router = express.Router();

/* GET home page. */
router.get( '/', function( req, res, next ) 
{
	res.render( 'contact', { title: 'Contact' } );
});

/* POST send function for contact form */
router.post( '/send', function( req, res, next ) 
{
	/* Using gmail (must be logged in) */
	var transporter = nodemailer.createTransport({
						service: 'Gmail',
						auth:
						{
							user: 'techguyinfo@gmail.com',
							/* Hmmm plain text password eh? */
							pass: 'something'
						}
					});
	
	var mailOptions = {
		from: 'John Doe <johndoe@outlook.com>',
		to: 'techguyinfo@gmail',
		subject: 'Website Submission',
		text: 'You have a new submission with the following details...Name:'+req.body.name+' Email: '+req.body.email+' Message: '+req.body.message,
		html: '<p>You got a new submission with the following details...</p><ul><li>Name: '+req.body.name+'</li><li>Email: '+req.body.email+'</li><li>Message: '+req.body.message+'</li></ul>'
	};
	
	transporter.sendMail( mailOptions, function( error, info )
	{
		if( error )
		{
			console.log( error );
			/* Redirect to home page */
			res.redirect( '/' );
		}
		else
		{
			console.log( 'Message Sent: '+info.response );
			res.redirect( '/' );
		}
	});
});

module.exports = router;
