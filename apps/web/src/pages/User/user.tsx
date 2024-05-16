import GreenButton from "../../components/GreenButton";
import WhiteButton from "../../components/WhiteButton";
import { useNavigate } from "react-router-dom";
import BasePage from "../../components/common/BasePage";
import './user.css';
import Input from "../../components/Input";
import SearchIcon from '@mui/icons-material/Search';
import { Checkbox, Divider, FormControlLabel } from "@mui/material";
import SelectInput from "../../components/SelectInput/SelectInput";

function User() {
    const navigate = useNavigate();

    const goToHome = () => {
        navigate("/home");
    }

    return (
        <BasePage leftIcon title="Cadastro">
            <div className="user-header"> 
                <div className="user-subtitle">Cadastre-se</div>
                <div className="user-title-description">Insira as informações abaixo para participar da rede solidária</div>
            </div>
            <div className="user-info"> 
                <div className="form-user-description bg-hard-light-gray">Informações pessoais</div>
                <div className="user-info-fields">
                    {/* nome */}
                    <div className="user-flex">
                        <Input label="Nome" placeholder="Nome e Sobrenome"/>
                    </div>
                    <div className="user-flex">
                        <Input label="E-mail" placeholder="seuemail@email.com"/>
                    </div>
                    <div className="user-flex">
                        <Input label="Telefone (Whatsapp)" placeholder="(00)00000-0000"/>
                    </div>
                    <div className="user-flex">
                        <Input label="Telefone (Whatsapp)" placeholder="(00)00000-0000"/>
                    </div>
                    <div className="user-flex">
                        <Input label="Ocupação" placeholder="Profissional de saúde" icon={<SearchIcon/>}/>  
                    </div>
                    
                    <SelectInput 
                        items={
                            [
                                {key: '1', value: 'Voluntário'}, 
                                {key: '2', value: 'Doador'}, 
                                {key: '3', value: 'Perfil 3'}
                            ]}
                            label="Perfil"
                            placeholder="Selecione"
                    />
                    {/* <Select/> */}
                </div>

                <div className="form-user-description bg-hard-light-gray">Endereço</div>
                <div className=" user-info-fields">
                    <Input label="CEP" placeholder="Selecione a UF" icon={<SearchIcon/>}/>
                    {/* Tipo de logradouro */}
                    <SelectInput 
                        items={
                            [
                                {key: '1', value: 'TIPO 1'}, 
                                {key: '2', value: 'TIPO 2'}, 
                                {key: '3', value: 'TIPO 3'}
                            ]}
                            label="Tipo de logradouro"
                            placeholder="Selecione"
                    />

                    {/* Endereço (logradouro) */}
                    <Input label="Endereço (logradouro)" placeholder="Ex. Rua ABC" />
                    {/* Número */}
                    <Input label="Número" placeholder="Ex. 7100000" />
                    {/* Complemento */}
                    <Input label="Complemento" placeholder="Ex. Complemento" />
                    {/* Bairro */}
                    <Input label="Bairro" placeholder="Ex. Centro" />
                </div>

                <div className="form-user-description bg-hard-light-gray">Como quer ajudar</div>
                <div className="user-info-fields">

                <div className="user-type-container" >
                        <p>Escala (turnos de 6 horas)</p>
                        <div className="user-type">
                            <FormControlLabel
                                label="Manhã"
                                    control={
                                        <Checkbox
                                        checked={true}
                                        onChange={() => ''}
                                        />
                                    }   
                            />
                            <FormControlLabel
                                label="Tarde"
                                control={
                                    <Checkbox
                                    checked={true}
                                    onChange={() => ''}
                                    />
                                }
                            />
                            <FormControlLabel
                                label="Noite"
                                control={
                                    <Checkbox
                                    checked={true}
                                    onChange={() => ''}
                                    />
                                }
                            />
                            <FormControlLabel
                                label="Madrugada"
                                
                                control={
                                    <Checkbox
                                    checked={true}
                                    onChange={() => ''}
                                        
                                    />
                                }
                            />
                        </div>
                    </div>
                    {/* Categoria de voluntário */}
                    <Input label="Categoria de voluntário" placeholder="Voluntário Civil" />
                    <Divider/>
                    <WhiteButton onClick={() => console.log('direcionar para as atividades')} text="+ Adicionar atividades"></WhiteButton>
                </div>
                <div style={{display: "flex", flexDirection: "row", padding: '0px 12px 0px 12px'}}>
                    <WhiteButton onClick={() => { goToHome() }} text="Voltar"/>
                    <GreenButton onClick={() => { goToHome() }} text="Cadastrar"/>
                </div>
            </div>
        </BasePage>
    );
  }
  
  export { User };