import React from 'react';
import {ComponentPreview, Previews} from '@react-buddy/ide-toolbox';
import {PaletteTree} from './palette';
import SlideOverHeaderUserBlock from "../components/slideOver/SlideOverHeadUserBlock.jsx";
import ListModal from "../components/modals/ListModal.jsx";
import App from "../App.jsx";

const ComponentPreviews = () => {
    return (
      <Previews palette={<PaletteTree />}>
        <ComponentPreview path="/SlideOverHeaderUserBlock">
          <SlideOverHeaderUserBlock />
        </ComponentPreview>
        <ComponentPreview path="/ListModal">
          <ListModal />
        </ComponentPreview>
        <ComponentPreview path="/App">
          <App />
        </ComponentPreview>
      </Previews>
    );
};

export default ComponentPreviews;