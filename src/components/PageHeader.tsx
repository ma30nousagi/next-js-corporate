interface PageHeaderProps {
    page: string;
}
  
  export function PageHeader(props: PageHeaderProps) { 
    return (
      <div>
        <h1 className="text-2xl text-center">{props.page}</h1>
      </div>
    );
  }
  