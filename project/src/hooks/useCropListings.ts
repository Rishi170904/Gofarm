// src/hooks/useCropListings.ts
import { useEffect } from 'react';
import { useStore } from '../store/store';
import { CropListing } from '../types';

export function useCropListings() {
  const { cropListings, addCropListing } = useStore();

  useEffect(() => {
    fetch('http://localhost:3001/cropListings')
      .then(response => response.json())
      .then(data => {
        data.forEach((listing: CropListing) => addCropListing(listing));
      });
  }, [addCropListing]);

  return cropListings;
}