export async function register(formData: FormData) {
    const serviceProvider = await createClient();
  
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;
    const confirmPassword = formData.get('confirmPassword') as string;
    const name = formData.get('name') as string;
    const surname = formData.get('surname') as string;

    if statements (password length, email, username etc)

    revalidatePath('/', 'layout');
    redirect('/');
}


export async function login(formData: FormData) {
    const serviceProvider = await createClient();
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;
  
    check for email and password to match etc..
    
    revalidatePath('/');
    redirect('/home');
}

export async function logout() {
    const serviceProvider = await createClient()
  
    const { error } = await serviceProvider.auth.signOut()
  
    if (error) {
      redirect('/error')
    }
  
    revalidatePath('/' , 'layout')
    redirect('/')
}

