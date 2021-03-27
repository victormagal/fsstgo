import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  background: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F2F2F2',
  },
  containerLogo: {
    alignItems: 'center',
  },
  container: {
    justifyContent: 'center',
    width: '100%',
    paddingRight: 30,
    paddingLeft: 30,
    paddingTop: 40,
  },
  baseTitle: {
    color: '#233568',
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'left',
  },
  innerTitle: {
    color: '#616368',
    fontSize: 16,
    marginTop: 18,
  },
  input: {
    backgroundColor: '#FFFFFF',
    width: '100%',
    marginBottom: 15,
    color: '#868E96',
    fontSize: 17,
    borderRadius: 7,
    padding: 10,
    marginTop: 20,
  },
  btnSubmit: {
    backgroundColor: '#233568',
    width: '100%',
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 7,
    marginTop: 10,
  },
  submitText: {
    color: '#F8F8F8',
    fontSize: 18,
  },
});
