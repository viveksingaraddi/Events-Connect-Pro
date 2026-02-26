// Update this page (the content is just a fallback if you fail to update the page)

const Index = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="text-center">
        <h1 className="mb-4 text-4xl font-bold">Welcome to Your Blank App</h1>
        <p className="text-xl text-muted-foreground">Start building your amazing project here!</p>
      </div>
      <div style={{marginTop:"80px", textAlign:"center", fontSize:"14px"}}>
  <a href="/worker-login">Worker Login</a> | 
  <a href="/worker-signup">Worker Signup</a> | 
  <a href="/authoriser-login">Hire Workers</a> | 
  <a href="/post-job">Post a Job</a> | 
  <a href="/about">About GigMitra</a>
</div>
    </div>
  );
};

export default Index;
