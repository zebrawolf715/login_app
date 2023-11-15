import { FC } from "react";
import { useForm } from "react-hook-form";
import { validationSchema } from "./utils/validationSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import "./style.scss"

interface LoginData {
  name: string;
  email: string;
  emailConfirmation: string;
  password: string;
  passwordConfirmation: string;
}

export const App: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginData>({
    mode: "onChange",  //onChange 入力してる最中
    shouldUnregister: false,
    resolver: zodResolver(validationSchema),
  });

  const onSubmit = (data: LoginData) => {
    console.log("Submitted Data", data);

  };

  return (
      <div className="formCSontainer">
          <form onSubmit={handleSubmit(onSubmit)}>
            <h1>React Signup</h1>
            <hr />
            <label htmlFor="">名前</label>
            <input
              className="formText"
              type="text"
              id="name"
              placeholder="4文字以上"
              {...register("name")}
              /*{...register("name", {
                required : "名前を入力してください。",
                minLength: { value: 2, message: "2文字以上で入力してください" },
              }) }*/
            />
            <p>{errors.name?.message as React.ReactNode}</p>

            <label htmlFor="email">メールアドレス</label>
            <input
              className="formText"
              type="email"
              id="email"
              placeholder="sample@sample.com"
              {...register("email")}
            />
            <p>{errors.email?.message as React.ReactNode}</p>

            <label htmlFor="emailConfirmation">確認メールアドレス</label>
            <input
              className="formText"
              type="email"
              id="emailConfirmation"
              placeholder="同じメールアドレスを入力"
              {...register("emailConfirmation")}
            />
            <p>
              {errors.emailConfirmation?.message as React.ReactNode}
            </p>

            <label htmlFor="password">パスワード</label>
            <input
              className="formText"
              id="password"
              type="password"
              placeholder="6文字以上"
              {...register("password")}
            />
            <p>{errors.password?.message as React.ReactNode}</p>

            <label htmlFor="passwordConfirmation">確認パスワード</label>
            <input
              className="formText"
              id="passwordConfirmation"
              type="password"
              placeholder="同じパスワードを入力"
              {...register("passwordConfirmation")}
            />
            <p>{errors.passwordConfirmation?.message as React.ReactNode}</p>

            <button type="submit">送信</button>
            <input type="reset" value="リセット" className="formReset" />
        </form>
    </div>
  );
}

export default App;
