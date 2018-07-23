import React from 'react';
import CategorySelect from './category_select';
import EditBox from './edit_box';
import TrumbowygBox from './trumbowyg_box';
import Coaching from './coaching';
import Resources from './resources';

const SelfReportEdit = ({ onKeyUp, onClick }) => {
  return (
    <div id="edit" onKeyUp={onKeyUp} onClick={onClick}>
      <CategorySelect />
      <EditBox name="shortDescription" title="Short Description" characters="300" />
      <EditBox name="tagline" title="Tagline" characters="25" />
      <TrumbowygBox name="moreInformation" title="More Information (HTML)" characters="2000" />
      <Resources />
      <Coaching />
    </div>
  );
};

export default SelfReportEdit;
