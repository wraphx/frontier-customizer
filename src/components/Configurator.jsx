import { useCustomization } from '../context/Customization';
import Select, { components } from 'react-select';
import '../App.css';
import ColorPicker from './ColorPicker';
import TexturePaths from './TexturePaths';

const options = [
    { value: 1, label: 'Raven'},
    { value: 2, label: 'Absolute Slaughter'},
    { value: 3, label: 'Bat Lady'},
    { value: 4, label: 'Brake Line'},
    { value: 5, label: 'Danger Inside'},
    { value: 6, label: 'Joker'},
    { value: 7, label: 'Madness'},
    { value: 8, label: 'Desert'},
    { value: 9, label: 'Hot Rods'},
    { value: 10, label: 'Mayan'},
    { value: 11, label: 'Sea Breeze'},
    { value: 12, label: 'Shape Shifter'},
    { value: 13, label: 'Silk'},
    { value: 14, label: 'Snake Skin'},
    { value: 15, label: 'Solar Flare'},
    { value: 16, label: 'Dominator'},
    { value: 17, label: 'Top Gun'},
    { value: 18, label: 'Water Explosion'},
    { value: 19, label: 'Wild West'},
    { value: 20, label: 'Zombie'},
];

const Option = ({ data, ...props }) => (
    <components.Option {...props}>
        {/* <img
            src={data.image}
            alt={data.label}
            style={{ width: '20px', marginRight: '10px' }}
        /> */}
        {data.label}
    </components.Option>
);


const Configurator = () => {
    const { overlay, setOverlay } = useCustomization();

    const handleOverlayChange = (selectedOption) => {
        setOverlay(selectedOption.value);
    };


    return (
        <>

            <div className='configurator'>
                <div className='conic all' />
                <div className='configurator__section__title'>
                    Select Vehicle Wrap
                </div>
                <div className='selector' >
                    <Select
                        value={options.find(option => option.value === overlay)}
                        options={options}
                        onChange={handleOverlayChange}
                        placeholder="Select Material"
                        components={{ Option }}
                        isSearchable={false}
                        getOptionLabel={(option) => option.label}
                        getOptionValue={(option) => option.value}
                    />
                    <div className='picker-color'>
                        <div className='configurator__section__title'>
                            Change Vehicle Color
                        </div>
                        <ColorPicker />
                    </div>
                </div>


                <div className='texture-images'>
                    {TexturePaths.map((v) => {
                        return (
                            <img key={v.overlay} src={v.path} id={`overlay${v.overlay}`} />
                        )
                    })}
                </div>

            </div>
        </>
    );
};

export default Configurator;