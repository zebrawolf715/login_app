import { z } from "zod";

export const validationSchema = z
    .object({
        name: z.string().min(4, "名前は4文字以上で入力してください"),
        email: z.string().email("正しいメールアドレスを入力してください"),
        emailConfirmation: z.string(),
        password: z.string().min(6, "パスワードは6文字以上で入力してください"),
        passwordConfirmation: z.string(),
    })
    .refine(
        ({ email, emailConfirmation }) => email === emailConfirmation,
        { path: ["emailConfirmation"]}
    )
    .refine(
        ({ password, passwordConfirmation }) => password === passwordConfirmation,
        { path: ["passwordConfirmation"],}
    );

