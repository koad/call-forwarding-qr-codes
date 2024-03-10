import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { AwesomeQR } from 'awesome-qr';

Template.CallForwardingCalculator.onRendered(function() {
  const phoneNumber = Session.get('phoneNumber');
  if (phoneNumber) {
    this.find('#phoneNumber').value = phoneNumber;
  }
});

Template.CallForwardingCalculator.events({
  'input #phoneNumber'(event, instance) {
    Session.setPersistent("phoneNumber", event.target.value.trim());
  }
});

Template.registerHelper('forwardingTypes', function() {
    return [
		{ prefix: '*21*', disable: "#21", description: 'Unconditional' },
		{ prefix: '*67*', disable: "#67", description: 'Busy' },
		{ prefix: '*62*', disable: "#62", description: 'Not Reachable' },
		{ prefix: '*61*', disable: "#61", description: 'No Reply' },
	];
});

Template.registerHelper('phoneNumber', function() {
	if(!Session.get("phoneNumber")) return '5195551234'
    return Session.get("phoneNumber");
});

Template.QRCode.onCreated(function () {
	const instance = this;
	instance.qrCodeImageSrc = new ReactiveVar();
	instance.autorun(() => {
		let phoneNumber = Session.get('phoneNumber');
		let text;

		if(typeof instance.data == 'object'){
			text = `tel:${instance.data.prefix}${phoneNumber}#`;
		} else text = `tel:${instance.data}#`

		new AwesomeQR({
			text: text,
			size: 222
		}).draw().then((dataURL) => {
			instance.qrCodeImageSrc.set(dataURL);
		}).catch((error) => {
			console.error('Error generating QR code: ', error);
		});
	});
});

Template.QRCode.helpers({
  QRCodeImageSrc() {
    return Template.instance().qrCodeImageSrc.get();
  }
});
