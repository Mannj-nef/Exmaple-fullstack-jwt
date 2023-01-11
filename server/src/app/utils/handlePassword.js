import bcrypt from "bcrypt";

export function handleHashPassword(password) {
  const saltRounds = 10;
  const salt = bcrypt.genSaltSync(saltRounds);
  const hash = bcrypt.hashSync(password, salt);

  return hash;
}

export function handleComparePassword(password, hash) {
  const pass = bcrypt.compareSync(password, hash);
  return pass;
}
