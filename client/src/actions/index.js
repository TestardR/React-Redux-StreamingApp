import streams from '../apis/streams';

export const createStream = formValues => async ispatch => {
  streams.post('/streams', formValues);
};
