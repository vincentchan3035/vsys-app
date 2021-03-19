import React from "react";
import "antd/dist/antd.css";
import { Divider,Select, InputNumber, Row, Col } from "antd";
import { ArrowRightOutlined } from "@ant-design/icons";
import Typography from '@material-ui/core/Typography';



const { Option } = Select;

const tokens = [
    {
      value: 'vsys',
      label: 'VSYS',
    },
    {
      value: 'eth',
      label: 'ETH',
    },
    {
      value: 'btc',
      label: 'BTC',
    },
    {
      value: 'ustd',
      label: 'USTD',
    },
  ];


const TokenSelect = () => {
    const [baseToken, setBaseToken] = React.useState('VSYS');
    const [targetToken,setTargetToken] = React.useState('BTC');
  
  
    const handleBaseToken = (event) => {
      setBaseToken(event.target.value);
    };
    const handleTargetToken = (event) => {
      setTargetToken(event.target.value);
    };
  

    return (
        <div>
            <Row>
            <Col span={8}>
                
                <Typography variant="subtitle1" align="center">
                        From
                </Typography>

                </Col>
                <Col span={8}></Col>
                <Col span={8}>
                <Typography variant="subtitle1" align="center">
                        To
                    </Typography>
                </Col>
            </Row>
            <Divider/>
            <Row >
            <Col span={4}>
            <InputNumber
              min={1}
              defaultValue={1}
              bordered={false}
              style={{ width: 130 }}
            />
            </Col>
            <Col spab={4}>
            <Select defaultValue={baseToken} style={{ width: 120 }} bordered={false}>
                {tokens.map((option) => (
                    <Option key={option.value} value={option.value}>
                    {option.label}
                    </Option>
                ))}
            </Select>
          </Col>
    
          <Col span={8} style={{ textAlign: "center" }}>
            <ArrowRightOutlined />
          </Col>
          
          <Col span={4}>
            <InputNumber
              min={1}
              defaultValue={1}
              bordered={false}
              style={{ width: 130 }}
            />
            </Col>
            <Col span={4}>
            <Select defaultValue={targetToken} style={{ width: 120 }} bordered={false}>
                {tokens.map((option) => (
                    <Option key={option.value} value={option.label}>
                    {option.label}
                    </Option>
                ))}
            </Select>
          </Col>
        </Row>
      </div>
    )
}

export default TokenSelect

