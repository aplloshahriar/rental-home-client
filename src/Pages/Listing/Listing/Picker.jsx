import { DatePicker, Space } from 'antd';
// import { CalendarOutlined } from '@ant-design/icons';
import moment from 'moment';
// moment from npm install moment

const { RangePicker } = DatePicker;

const disabledDate = current => {
    // Disable dates before today
    return current && current < moment().startOf('day');
};
const Picker = () => (
    <Space direction="vertical" size={12}>
        <RangePicker
            style={{ width: '80%', height: '55px',border: '1px solid rgba(128, 128, 128, 0.5)' }}
            className='mt-4'
            placeholder={['Arrival', 'Departure']}
            disabledDate={disabledDate}
        />
    </Space>
);
export default Picker;

// date picker from antDesign