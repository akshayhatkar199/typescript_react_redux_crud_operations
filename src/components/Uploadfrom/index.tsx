import React, { useState } from "react";
import { Button, Form, Input } from "antd";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { updateUsername } from "../../Store/userReducer";
import { RootState } from "../../Store/userReducer";

interface User {
    id: number;
    name: string;
    email: string;
}

const Uploadfrom: React.FC = () => {
    const [loading, setLoading] = useState(false);
    const { id } = useParams<{ id: string | undefined }>() ?? { id: '' };
    // const {id} = useParams();
    const userData = useSelector((state: RootState) => state.userData.value);
    const dispatch = useDispatch();
    const existingUser = userData.find((user: User) => user.id === Number(id)) || { id: 0, name: '', email: '' };
    const { name, email } = existingUser;
    const [uname, setName] = useState(name);
    const [uemail, setEmail] = useState(email);
    const [form] = Form.useForm();
    const navigate = useNavigate();

    const onFinish = (value: { name: string; email: string }) => {
        console.log("Success:", value);
        dispatch(updateUsername({
            id: existingUser.id,
            name: uname,
            email: uemail,
        }));
        navigate("/");
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log("Failed:", errorInfo);
    };

    return (
        <div className="d-flex w-100 vh-100 justify-content-center align-items-center">
            <div className="w-50 border bg-secondary text-white p-5">
                <h2 className="text-center mb-3"> Typescript Redux Update User</h2>
                <Form
                    name="basic"
                    labelCol={{
                        span: 8,
                    }}
                    wrapperCol={{
                        span: 16,
                    }}
                    style={{
                        maxWidth: 600,
                    }}
                    initialValues={{ name: uname, email: uemail }}
                    onValuesChange={(changedValues, allValues) => {
                        setName(allValues.name);
                        setEmail(allValues.email);
                    }}
                    onFinish={onFinish}
                    form={form}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                >
                    <Form.Item
                        label="Name"
                        name="name"
                        rules={[
                            {
                                required: true,
                                message: "Please input your Name!",
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Email"
                        name="email"
                        rules={[
                            {
                                required: true,
                                message: "Please input your Email!",
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        wrapperCol={{
                            offset: 8,
                            span: 16,
                        }}
                    >
                        <Button type="primary" htmlType="submit" loading={loading}>
                            Update
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    );
};

export default Uploadfrom;
