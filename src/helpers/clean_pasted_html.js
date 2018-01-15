export default function (input) {
  // 1. remove line breaks / Mso classes
  var stringStripper = /(\n|\r| class=(")?Mso[a-zA-Z]+(")?)/g;
  var output = input.replace(stringStripper, ' ');

  // 2. strip Word generated HTML comments
  var commentSripper = new RegExp('<!--(.*?)-->', 'g');
  output = output.replace(commentSripper, '');

  // 3. remove tags and leave content if any
  var tagStripper = new RegExp('<(/)*(meta|link|span|\\?xml:|st1:|o:|font)(.*?)>', 'gi');
  output = output.replace(tagStripper, '');

  // 4. Remove everything in between and including tags '<style(.)style(.)>'
  var badTags = ['style', 'script', 'applet', 'embed', 'noframes', 'noscript'];
  for (let i = 0; i < badTags.length; i++) {
    tagStripper = new RegExp('<' + badTags[i] + '.*?' + badTags[i] + '(.*?)>', 'gi');
    output = output.replace(tagStripper, '');
  }

  // 5. remove attributes ' style="..."'
  var badAttributes = ['style', 'start'];
  for (var i = 0; i < badAttributes.length; i++) {
    var attributeStripper = new RegExp(' ' + badAttributes[i] + '="(.*?)"', 'gi');
    output = output.replace(attributeStripper, '');
  }

  // 6. Replace nbsp; with actual spaces (this is risky, but I think it'll be fine)
  output = output.replace(/&nbsp;/g, ' ');

  // 7. Remove extra spaces (only 1 space anywhere)
  output = output.replace(/\s+/g, ' ');

  return output;
}
