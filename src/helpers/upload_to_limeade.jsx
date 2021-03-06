/* globals $*/

import React from 'react';
import createCSV from './create_csv';

const uploadToLimeade = (type) => {
  const csv = createCSV(type);
  const headers = csv[0].join(',');
  const url = 'https://calendarbuilder.dev.adurolife.com/limeade-upload/';

  const oneIncentiveEvent = csv[1].join(',');

  const params = {
    e: $('#employer-name').val(),
    psk: $('#limeadePSK').val(),
    data: headers + '\n' + oneIncentiveEvent,
		type: 'IncentiveEvents'
  };

  // Open Modal
  $('#uploadModal').modal('show');
  $('#uploadModalBody').html('<p>Uploading...</p>');

  $.post(url, params).done(function(response) {
		$('#uploadModalBody').append(`<p>${response}</p>`);
    console.log(response);
  });

};

export default uploadToLimeade;
