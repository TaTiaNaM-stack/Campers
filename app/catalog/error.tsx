'use client';

type Props = {
  error: Error;
}

const Error = ({error}: Props) => {
    return (
        <p style={{color: '#ff0000', fontSize: '18px', fontWeight: 'bold'}}>Could not fetch the list of tracks.{error.message}</p>
    );
};

export default Error;