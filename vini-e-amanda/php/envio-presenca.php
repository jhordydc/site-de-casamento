<?php
//Variáveis
$nomeCompleto = $_POST['nomeCompleto'];
$confirmacaoEvento = $_POST['confirmacaoEvento'];
$qtdAdultos = $_POST['qtdAdultos'];
$qtdCriancas = $_POST['qtdCriancas'];
$email = $_POST['email'];
$telefone = $_POST['telefone'];
$observacoes = $_POST['observacoes'];
$data_envio = date('d/m/Y');
$hora_envio = date('H:i:s');

//Compo E-mail
$arquivo = "
    <html>
        <p><b>Nome Completo: </b>$nomeCompleto</p>
        <p><b>Confirmação de Presença: </b>$confirmacaoEvento</p>
        <p><b>Quantidade de Adultos: </b>$qtdAdultos</p>
        <p><b>Quantidade de Crianças: </b>$qtdCriancas</p>
        <p><b>E-mail: </b>$email</p>
        <p><b>Telefone: </b>$telefone</p>
        <p><b>Observações: </b>$observacoes</p>
        <p>Este e-mail foi enviado em <b>$data_envio</b> às <b>$hora_envio</b></p>
    </html>
";

//Emails para quem será enviado o formulário
$destino = "jhordy570@gmail.com";  // Altere para o endereço desejado
$assunto = "Confirmação de Presença";

//Este sempre deverá existir para garantir a exibição correta dos caracteres
$headers  = "MIME-Version: 1.0\n";
$headers .= "Content-type: text/html; charset=iso-8859-1\n";
$headers .= "From: $nomeCompleto <$email>";

//Enviar
mail($destino, $assunto, $arquivo, $headers);

echo "<meta http-equiv='refresh' content='10;URL=../pagina-de-confirmacao.html'>";  // Altere o URL de redirecionamento conforme necessário
?>
