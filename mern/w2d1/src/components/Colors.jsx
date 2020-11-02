import React from 'react';
import Color from './Color';



const Colors = ({colors, deleteColor, updateCompleted}) => {

    return (
        <div>
            <p>Hello this is the Colors component!</p>
            {
                colors.map((val, idx) =>
                    <section key={idx}>
                        <Color
                            color={val}
                            idx={idx}
                            deleteColor={deleteColor}
                            updateCompleted={updateCompleted}
                        />
                    </section>
                )
            }
        </div>
    )
}

export default Colors;